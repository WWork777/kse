'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import "./YandexMap.scss";

// Глобальный флаг для загрузки API
if (typeof window !== 'undefined') {
  window.YMAPS_LOADED = window.YMAPS_LOADED || false
}

/**
 * @typedef {Object} MapPoint
 * @property {string|number} id
 * @property {[number, number]} coordinates
 * @property {string} [hintContent]
 * @property {string} [balloonContent]
 */

/**
 * @typedef {Object} YMapProps
 * @property {[number, number]} [center]
 * @property {MapPoint[]} [points]
 * @property {number} [zoom]
 */

/**
 * Компонент Яндекс.Карты
 * @param {YMapProps} props
 */
const YMap = ({ center = [55.324422, 86.149496], points = [
    {
      id: 'glav',
      coordinates: [55.324422, 86.149496],
      hintContent: 'ВОКС',
      balloonContent: '<strong>ул. терешковой 41/3</strong>',
    },
  ], zoom = 16 }) => {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const [isApiLoaded, setIsApiLoaded] = useState(false)
  const [mapError, setMapError] = useState(null)

  const initMap = useCallback(() => {
    if (!mapRef.current || !window.ymaps) return

    try {
      if (!mapInstance.current) {
        mapInstance.current = new window.ymaps.Map(mapRef.current, {
          center: center,
          zoom: zoom,
          controls: ['zoomControl', 'fullscreenControl'],
        })
      }

      mapInstance.current.geoObjects.removeAll()

      const pointsToShow = points.length > 0
        ? points
        : [{
            id: 'default',
            coordinates: center,
            hintContent: 'ВОКС',
            balloonContent: 'АРЕНА РАЗВЛЕЧЕНИЙ в ТОМСКЕ',
          }]

      pointsToShow.forEach((point) => {
        const placemark = new window.ymaps.Placemark(
          point.coordinates,
          {
            hintContent: point.hintContent || '',
            balloonContent: point.balloonContent || '',
          },
          {
            preset: 'islands#redDotIcon',
            iconColor: '#000',
          }
        )
        mapInstance.current.geoObjects.add(placemark)
      })

      if (pointsToShow.length > 1) {
        const bounds = mapInstance.current.geoObjects.getBounds()
        if (bounds) {
          mapInstance.current.setBounds(bounds, {
            checkZoomRange: true,
            zoomMargin: 20,
          })
        }
      } else {
        mapInstance.current.setCenter(pointsToShow[0].coordinates)
      }
    } catch (error) {
      console.error('Ошибка при инициализации карты:', error)
      setMapError('Не удалось загрузить карту')
    }
  }, [center, points, zoom])

  // Загрузка API (без изменений)
  useEffect(() => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        setIsApiLoaded(true)
        initMap()
      })
      return
    }

    if (window.YMAPS_LOADED) {
      const checkYmaps = setInterval(() => {
        if (window.ymaps) {
          clearInterval(checkYmaps)
          window.ymaps.ready(() => {
            setIsApiLoaded(true)
            initMap()
          })
        }
      }, 100)
      return () => clearInterval(checkYmaps)
    }

    window.YMAPS_LOADED = true

    const script = document.createElement('script')
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=35e69fa1-b8ab-4812-b2ff-bcb4f27cc874&lang=ru_RU'
    script.async = true

    script.onload = () => {
      window.ymaps.ready(() => {
        setIsApiLoaded(true)
        initMap()
      })
    }

    script.onerror = () => {
      setMapError('Ошибка загрузки карты. Проверьте подключение к интернету.')
      window.YMAPS_LOADED = false
    }

    document.body.appendChild(script)

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy()
        mapInstance.current = null
      }
    }
  }, [initMap])

  useEffect(() => {
    if (isApiLoaded && window.ymaps && mapInstance.current) {
      initMap()
    }
  }, [center, points, isApiLoaded, initMap])

  useEffect(() => {
    const handleResize = () => {
      if (mapInstance.current) {
        mapInstance.current.container.fitToViewport()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (mapError) {
    return (
      <div className='ymap map flex items-center justify-center bg-gray-100 text-gray-500 min-h-[400px] rounded-2xl'>
        {mapError}
      </div>
    )
  }

  return (
    <>
      <h2 className="titleMap">Наше местоположение</h2>
      <div
        ref={mapRef}
        className='ymap map w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg'
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          backgroundColor: '#f0f0f0',
        }}
      />
    </>
  )
}

export default YMap
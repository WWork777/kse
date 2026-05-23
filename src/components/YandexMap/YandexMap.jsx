'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

// Глобальный флаг, чтобы API загружался один раз на страницу
if (typeof window !== 'undefined') {
  window.YMAPS_LOADED = window.YMAPS_LOADED || false
}

/**
 * Компонент Яндекс.Карты с поддержкой нескольких точек и фиксированным центром.
 *
 * @param {Object} props
 * @param {[number, number]} props.center – центр карты (по умолчанию [56.4779, 84.9888])
 * @param {Array<{ id: string|number, coordinates: [number, number], hintContent?: string, balloonContent?: string }>} props.points – массив точек
 * @param {number} [props.zoom] – начальный зум (используется, если точек <= 1, иначе подбирается автоматически)
 */
const YMap = ({ center = [55.324422, 86.149496], points = [
    {
      id: 'glav',                         // ← центральная точка
      coordinates: [55.324422, 86.149496],
      hintContent: 'ВОКС',
      balloonContent: '<strong>ул. терешковой 41/3</strong>',
    },
  	], zoom = 16 }) => {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const [isApiLoaded, setIsApiLoaded] = useState(false)
  const [mapError, setMapError] = useState(null)

  // Инициализация карты и расстановка меток
  const initMap = useCallback(() => {
    if (!mapRef.current || !window.ymaps) return

    try {
      // Создаём карту единожды
      if (!mapInstance.current) {
        mapInstance.current = new window.ymaps.Map(mapRef.current, {
          center: center,     // фиксированный центр
          zoom: zoom,
          controls: ['zoomControl', 'fullscreenControl'],
        })
      }

      // Удаляем все старые метки
      mapInstance.current.geoObjects.removeAll()

      // Если массив точек пуст – используем центр как единственную точку (стандартное поведение)
      const pointsToShow =
        points.length > 0
          ? points
          : [
              {
                id: 'default',
                coordinates: center,
                hintContent: 'ВОКС',
                balloonContent: 'АРЕНА РАЗВЛЕЧЕНИЙ в ТОМСКЕ',
              },
            ]

      // Создаём Placemark для каждой точки
      pointsToShow.forEach((point) => {
        const placemark = new window.ymaps.Placemark(
          point.coordinates,
          {
            hintContent: point.hintContent || point.hint || '',
            balloonContent: point.balloonContent || '',
          },
          {
            preset: 'islands#redDotIcon',
            iconColor: '#000',
          }
        )
        mapInstance.current.geoObjects.add(placemark)
      })

      // Если точек несколько – автоматически масштабируем карту, чтобы все были видны
      if (pointsToShow.length > 1) {
        const bounds = mapInstance.current.geoObjects.getBounds()
        if (bounds) {
          mapInstance.current.setBounds(bounds, {
            checkZoomRange: true,
            zoomMargin: 20,   // небольшой отступ от краёв
          })
        }
      } else {
        // Одна точка – просто центрируем её
        mapInstance.current.setCenter(pointsToShow[0].coordinates)
      }
    } catch (error) {
      console.error('Ошибка при инициализации карты:', error)
      setMapError('Не удалось загрузить карту')
    }
  }, [center, points, zoom])

  // Загрузка API Яндекс.Карт
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
    script.src =
      'https://api-maps.yandex.ru/2.1/?apikey=35e69fa1-b8ab-4812-b2ff-bcb4f27cc874&lang=ru_RU'
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

  // Перерисовываем карту при изменении пропсов
  useEffect(() => {
    if (isApiLoaded && window.ymaps && mapInstance.current) {
      initMap()
    }
  }, [center, points, isApiLoaded, initMap])

  // Ресайз карты
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
  )
}

export default YMap
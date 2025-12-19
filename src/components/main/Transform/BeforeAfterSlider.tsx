'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  width?: number;
  height?: number;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'До',
  afterAlt = 'После',
  width = 1920,
  height = 1080,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updateSliderPosition(clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        updateSliderPosition(e.clientX);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
      }
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging.current && e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    };

    const handleGlobalTouchEnd = () => {
      if (isDragging.current) {
        isDragging.current = false;
      }
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchmove', handleGlobalTouchMove, {
      passive: false,
    });
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isDragging.current && containerRef.current) {
      updateSliderPosition(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.beforeAfterContainer}
      onClick={handleContainerClick}
    >
      <div className={styles.beforeAfterWrapper}>
        {/* После (основное изображение) */}
        <div className={styles.afterImage}>
          <Image
            src={afterImage}
            alt={afterAlt}
            width={width}
            height={height}
            className={styles.sliderImage}
          />
        </div>

        {/* До (обрезанное изображение) */}
        <div
          className={styles.beforeImage}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            width={width}
            height={height}
            className={styles.sliderImage}
          />
        </div>

        {/* Ползунок */}
        <div
          className={styles.slider}
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleMouseDown(e);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            handleMouseDown(e);
          }}
        >
          <div className={styles.sliderLine}></div>
          <div className={styles.sliderButton}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 8L19 12L15 16M9 8L5 12L9 16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

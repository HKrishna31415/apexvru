import React, { useState, useEffect, useCallback } from 'react';
import { HomePage } from '../components/Application/HomePage';
import { Modal } from '../components/Application/Modal';
import { Application } from '../components/Application/types';

interface TransitionInfo {
  rect: DOMRect;
  image: string;
}

const Applications: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [transitionInfo, setTransitionInfo] = useState<TransitionInfo | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardClick = useCallback((app: Application, element: HTMLElement) => {
    if (selectedApp) return;
    const rect = element.getBoundingClientRect();
    setSelectedApp(app);
    setTransitionInfo({ rect, image: app.image });
  }, [selectedApp]);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleModalExited = useCallback(() => {
    setSelectedApp(null);
  }, []);

  return (
    <>
      <HomePage onCardClick={handleCardClick} />

      {selectedApp && (
        <Modal
          app={selectedApp}
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          onExited={handleModalExited}
        />
      )}

      {transitionInfo && (
        <div
          style={{
            position: 'fixed',
            top: `${transitionInfo.rect.top}px`,
            left: `${transitionInfo.rect.left}px`,
            width: `${transitionInfo.rect.width}px`,
            height: `${transitionInfo.rect.height}px`,
            zIndex: 100,
            borderRadius: '0.75rem', // xl
            overflow: 'hidden',
          }}
          ref={el => {
            if (el) {
              requestAnimationFrame(() => {
                el.style.transition = 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)';
                
                // Animate to modal-like dimensions
                const targetWidth = Math.min(1024, window.innerWidth * 0.9);
                const targetHeight = Math.min(768, window.innerHeight * 0.9);
                
                el.style.top = `calc(50% - ${targetHeight / 2}px)`;
                el.style.left = `calc(50% - ${targetWidth / 2}px)`;
                el.style.width = `${targetWidth}px`;
                el.style.height = `${targetHeight}px`;
                el.style.borderRadius = '0.75rem';
              });

              setTimeout(() => {
                setIsModalVisible(true);
                setTransitionInfo(null);
              }, 500); // Must match animation duration
            }
          }}
        >
          <img src={transitionInfo.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      )}
    </>
  );
};

export default Applications;
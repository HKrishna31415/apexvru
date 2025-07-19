import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.7; }
  70% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.7; }
`;

const shimmer = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const AtmosphereIconWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  width: 200px;
  height: 200px;
  
  .planet-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, #38bdf8, #0284c7); /* sky-400 to sky-600 */
    border-radius: 50%;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.3), 0 0 15px #38bdf8;
  }

  .atmosphere-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border-style: solid;
    animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
  }

  .layer-1 {
    width: 90%;
    height: 90%;
    border: 3px solid rgba(103, 232, 249, 0.5); /* cyan-300 */
    animation: ${pulse} 4s ease-in-out infinite;
  }

  .layer-2 {
    width: 100%;
    height: 100%;
    border: 2px solid rgba(103, 232, 249, 0.3); /* cyan-300 */
    animation: ${pulse} 4s ease-in-out infinite reverse;
  }
  
  .layer-3 {
    width: 110%;
    height: 110%;
    border: 1px dashed rgba(103, 232, 249, 0.4); /* cyan-300 */
    animation: ${shimmer} 3s ease-in-out infinite;
  }
`;

const AtmosphereIcon = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AtmosphereIconWrapper isVisible={isVisible}>
      <div className="planet-core"></div>
      <div className="atmosphere-layer layer-1"></div>
      <div className="atmosphere-layer layer-2"></div>
      <div className="atmosphere-layer layer-3"></div>
    </AtmosphereIconWrapper>
  );
};

export default AtmosphereIcon;

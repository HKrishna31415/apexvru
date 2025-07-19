import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const orbit = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const N2O4IconWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  width: 192px;
  height: 192px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isVisible }) => (isVisible ? float : 'none')} 6s ease-in-out infinite;

  .n2-core {
    position: relative;
    width: 64px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    /* N-N Bond */
    &::before {
      content: '';
      position: absolute;
      width: 24px;
      height: 6px;
      background-color: #94a3b8; /* slate-400 */
      z-index: 1;
    }
  }

  .atom {
    position: absolute;
    border-radius: 50%;
    box-shadow: inset 0 0 8px rgba(0,0,0,0.4);
  }

  .nitrogen {
    width: 32px;
    height: 32px;
    background-color: #1e40af; /* blue-800 */
    z-index: 2;
  }
  .n1 { left: 0; }
  .n2 { right: 0; }
  
  .orbit {
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    animation: ${({ isVisible }) => (isVisible ? orbit : 'none')} linear infinite;
  }

  .orbit-1 { animation-duration: 8s; }
  .orbit-2 { animation-duration: 8s; animation-delay: -4s; }
  .orbit-3 { animation-duration: 10s; }
  .orbit-4 { animation-duration: 10s; animation-delay: -5s; }

  .oxygen {
    width: 24px;
    height: 24px;
    background-color: #be123c; /* red-700 */
    z-index: 3;
    position: absolute;
    /* Position atom at the top of the rotating orbit container */
    top: 0px;
    left: 50%;
    transform: translate(-50%, -12px); /* Center horizontally, half-way up */
  }
`;

const N2O4Icon = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <N2O4IconWrapper isVisible={isVisible}>
      <div className="orbit orbit-1">
        <div className="atom oxygen"></div>
      </div>
       <div className="orbit orbit-2" style={{transform: 'rotate(90deg)'}}>
        <div className="atom oxygen"></div>
      </div>
       <div className="orbit orbit-3" style={{transform: 'rotate(180deg)'}}>
        <div className="atom oxygen"></div>
      </div>
       <div className="orbit orbit-4" style={{transform: 'rotate(270deg)'}}>
        <div className="atom oxygen"></div>
      </div>

      <div className="n2-core">
        <div className="atom nitrogen n1"></div>
        <div className="atom nitrogen n2"></div>
      </div>
    </N2O4IconWrapper>
  );
};

export default N2O4Icon;
import React from 'react';
import styled from 'styled-components';

interface ElectricButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isAnimating?: boolean;
}

const ElectricButton: React.FC<ElectricButtonProps> = ({ children, isAnimating, ...props }) => {
  return (
    <StyledButtonContainer className={isAnimating ? 'is-animating' : ''} {...props}>

        <div className="shipping-button-visuals">
          <div className="glow" />
          <div className="shadow">
            <div className="container">
              <div className="shipBtn">
                <p className="write">{children}</p>
                <svg color="#878787" xmlns="http://www.w3.org/2000/svg" fill="black" strokeWidth={1} viewBox="0 0 24 24" height="30px" width="30px" id="flash">
                  <path fill="#181818" d="M13.2319 2.28681C13.5409 2.38727 13.75 2.6752 13.75 3.00005V9.25005H19C19.2821 9.25005 19.5403 9.40834 19.6683 9.65972C19.7963 9.9111 19.7725 10.213 19.6066 10.4412L11.6066 21.4412C11.4155 21.7039 11.077 21.8137 10.7681 21.7133C10.4591 21.6128 10.25 21.3249 10.25 21.0001V14.7501H5C4.71791 14.7501 4.45967 14.5918 4.33167 14.3404C4.20366 14.089 4.22753 13.7871 4.39345 13.5589L12.3935 2.55892C12.5845 2.2962 12.923 2.18635 13.2319 2.28681Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                <span className="spark spark-1" />
                <span className="spark spark-2" />
                <span className="spark spark-3" />
                <span className="spark spark-4" />
                <span className="spark spark-5" />
                <div className="light" />
              </div>
            </div>
          </div>
        </div>
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.button`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 70px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #181818;
  z-index: 999;
  outline: none;

  .shipping-button-visuals {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
  }
  
  .background-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;



    .line-2 {
      width: 80px;
      height: 3px;
      top: 30px;
      right: -40px;
      transform: rotate(15deg);
    }

    .line-3 {
      width: 120px;
      height: 7px;
      bottom: 20px;
      left: -60px;
      transform: rotate(40deg);
    }
  }

  .lightning-bolt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
  }

  @keyframes scaling {
    from {
      transform: translate(-50%,-50%) scale(1);
    }
    to {
      transform: translate(-50%,-50%) scale(1.1);
    }
  }

  @keyframes descaling {
    from {
      transform: translate(-50%,-50%) scale(1.1);
    }
    to {
      transform: translate(-50%,-50%) scale(1);
    }
  }

  &:hover:not(:disabled) .background-lines, 
  &:hover:not(:disabled) .shipping-button-visuals {
    animation: scaling 0.3s ease-in-out forwards;
    transform: translate(-50%,-50%) scale(1.1);
  }

  &:not(:hover) .background-lines, &:not(:hover) .shipping-button-visuals {
    animation: descaling 0.2s ease-in-out forwards;
  }

  &:active:not(:disabled) .shipping-button-visuals, 
  &:active:not(:disabled) .background-lines {
    animation: descaling 0.2s ease forwards;
  }

  #horizontalGradient {
    transition: all 1s ease;
  }

  @keyframes expandGradient {
    0% { stop-opacity: 0; }
    50% { stop-opacity: 1; }
    100% { stop-opacity: 0; }
  }

  .horizontal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 500px;
    height: 80px;
  }

  .horizontal :nth-child(1) {
    position: absolute;
    top: -40px;
    left: 50px;
    width: 400px;
  }

  .horizontal :nth-child(2) {
    position: absolute;
    top: -50px;
    left: 50px;
    width: 400px;
  }

  .horizontal :nth-child(3) {
    position: absolute;
    top: -37px;
    left: 15px;
    width: 470px;
  }

  .vertical {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
  }

  .vertical :nth-child(1) {
    position: absolute;
    top: -2px;
    left: 0;
    width: 250px;
  }

  .vertical :nth-child(2) {
    position: absolute;
    top: 0;
    left: 10px;
    width: 250px;
  }

  .vertical :nth-child(3) {
    position: absolute;
    top: 0;
    left: 20px;
    width: 250px;
  }

  .vertical :nth-child(4) {
    position: absolute;
    top: 0;
    left: 43px;
    width: 250px;
  }

  .vertical :nth-child(5) {
    position: absolute;
    top: 0;
    left: 50px;
    width: 250px;
  }

  .vertical :nth-child(6) {
    position: absolute;
    top: 0;
    left: 66px;
    width: 250px;
  }

  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%; /* Increased size for more prominence */
    height: 150%; /* Increased size for more prominence */
    background: radial-gradient(circle, rgba(255, 255, 0, 0.6) 0%, rgba(255, 255, 0, 0) 70%); /* Brighter yellow glow */
    filter: blur(30px); /* Increased blur for a softer, wider glow */
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out; /* Slower transition for a smoother effect */
    z-index: -1;
  }

  &.is-animating .glow {
    opacity: 1;
    animation: pulseGlow 2s infinite alternate; /* Added pulse animation */
  }

  @keyframes pulseGlow {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
  }

  .container {
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(4, 4, 4, 1) 61%,
      rgba(4, 4, 4, 1) 100%
    );
    width: 250px;
    height: 72px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shadow {
    position: relative;
    background: rgb(4, 4, 4);
    background: linear-gradient(
      170deg,
      rgba(4, 4, 4, 1) 61%,
      rgba(93, 67, 2, 1) 100%
    );
    width: 253px;
    height: 74px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shipBtn {
    width: 240px;
    height: 62px;
    background: rgba(255, 190, 24, 1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 0px 5px rgba(255, 190, 24, 1));
  }

  .write {
    z-index: 1;
    margin-left: 5px;
    user-select: none;
  }

  .light {
    width: 220px;
    height: 35px;
    border-radius: 10px;
    background: #ffd771;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    filter: blur(7px);
  }

  #flash {
    z-index: 1;
    margin: 5px;
  }

  &.is-animating .gradient-path {
    animation: gradientAnimation 3s ease-in-out;
    stroke-linecap: round;
  }

  &.is-animating .gradient-path1 {
    animation: gradientAnimation1 3s ease-in-out;
    stroke-linecap: round;
  }

  &.is-animating .spark {
    display: inline-block;
  }

  @keyframes gradientAnimation {
    0% { stroke-dasharray: 800, 0; stroke-dashoffset: 400; }
    25% { stroke-dasharray: 0, 800; stroke-dashoffset: 0; }
    50% { stroke-dasharray: 0, 800; stroke-dashoffset: 400; }
    75% { stroke-dasharray: 0, 800; stroke-dashoffset: 0; }
    100% { stroke-dasharray: 800, 0; stroke-dashoffset: 400; }
  }

  @keyframes gradientAnimation1 {
    0% { stroke-dasharray: 0, 800; stroke-dashoffset: 0; }
    25% { stroke-dasharray: 400, 400; stroke-dashoffset: 200; }
    50% { stroke-dasharray: 800, 0; stroke-dashoffset: 400; }
    75% { stroke-dasharray: 400, 400; stroke-dashoffset: 200; }
    100% { stroke-dasharray: 0, 800; stroke-dashoffset: 0; }
  }

  .spark {
    display: none;
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 0, 1);
    border-radius: 50%;
    filter: blur(15px);
    animation: electric-move 1s infinite alternate ease-in-out;
    transition: opacity 0.2s ease-in-out;
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 69, 0, 0.4);
  }

  .spark-1 { top: 15px; left: 25%; animation-delay: 0s; }
  .spark-2 { top: 40%; left: 15px; animation-delay: 0.03s; }
  .spark-3 { bottom: 15px; right: 25%; animation-delay: 0.06s; }
  .spark-4 { top: 15px; right: 15px; animation-delay: 0.09s; }
  .spark-5 { bottom: 15px; left: 15px; animation-delay: 0.12s; }

  @keyframes electric-move {
    0% { transform: translate(0, 0) scale(1); opacity: 1; filter: blur(5px); }
    25% { transform: translate(5px, -5px) scale(1.2); opacity: 0.8; filter: blur(8px); }
    50% { transform: translate(-5px, 5px) scale(1); opacity: 1; filter: blur(3px); }
    75% { transform: translate(6px, -8px) scale(1.3); opacity: 0.6; filter: blur(10px); }
    100% { transform: translate(0, 0) scale(1); opacity: 1; filter: blur(5px); }
  }
`;

export default ElectricButton;
export {};
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface _NotificationProps {
  animation: boolean;
}

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateX(-50%) scale(0);
}
to {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
`;

const fadeOut = keyframes`
from {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
to {
  opacity: 0;
  transform: translateX(-50%) scale(0);
}`;

const _Notification = styled.div<_NotificationProps>`
  display: flex;
  font-size: 2rem;
  padding: 1rem;
  background-color: red;
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  transform-origin: center
  background-color: #f97c7c;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem -0.3rem #000000;
  animation: ${(props) =>
    props.animation
      ? css`
          ${fadeIn}
        `
      : css`
          ${fadeOut}
        `}
    linear .2s;
`;

interface NotificationProps {
  open: boolean;
  message: string;
  onClose: () => void;
  autoHideDuration: number;
}

function Notification({ open, message, onClose, autoHideDuration }: NotificationProps) {
  const [animation, setAnimation] = React.useState(true);

  /**
   * if authohideDuration is set
   */
  React.useEffect(() => {
    if (!autoHideDuration) return;
    if (!open) return;
    const timer = setTimeout(() => setAnimation(false), autoHideDuration);

    return () => clearTimeout(timer);
  }, [open]);

  /**
   * if autohideDuration is missing
   */
  function handleAnimationEnd() {
    if (animation) return;
    onClose();
    setAnimation(true);
  }

  return (
    <>
      {open && (
        <_Notification animation={animation} onAnimationEnd={handleAnimationEnd}>
          {message}
        </_Notification>
      )}
    </>
  );
}

export default Notification;

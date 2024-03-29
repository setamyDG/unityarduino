import styled from 'styled-components';
import React from 'react';

const StyledCursor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    animation: cursorAnim .5s infinite alternate;
    pointer-events: none;
    *::after {
     content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    border: 8px solid gray;
    border-radius: 50%;
    opacity: .5;
    top: -8px;
    left: -8px;
    animation: cursorAnim2 .5s infinite alternate;
    }
    @keyframes cursorAnim {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.7);
    }
}

@keyframes cursorAnim2 {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.4);
    }
}

@keyframes cursorAnim3 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(3);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}
`;

export const Cursor = () => {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    if(cursor) {
      cursor.setAttribute('style', `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
    }
  });
  return (
    <StyledCursor />
  );
};

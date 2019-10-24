import styled from 'styled-components';

export const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url("https://www.desktopbackground.org/download/1920x1080/2012/04/21/378104_tom-ford-glasses_2560x1440_h.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  filter: gray();
  -webkit-filter: grayscale() blur(8px); 
  transform: scale(1);
  opacity: 0.5;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
   -webkit-transition: All 1s ease-in-out;
  :hover{
      -webkit-transition: All 1s ease-in-out;
      opacity: 1;
      filter: none;
      -webkit-filter: grayscale(0);
      transform: scale(1.15);
       @include transform(translate(var(--translate-x), var(--translate-y)));
    }
  }
    
    @media (max-width: 375px){
      width: 100%;
      height: 100%;
      overflow:hidden;
      margin: auto;
      transform: scale(1);
      :hover{
      transform: scale(1);
      }
    }
`;

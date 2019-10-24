import styled from 'styled-components';
import { StyledBackground } from '../background/Background';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.regular};
  font-size: ${({ isBig }) => (isBig ? '5em' : '2em')};
  font-family: "Times New Roman";
  text-align: center;
  justify-content: center;
  width: 400px;
  opacity: 0;
  margin-top: 300px;
  -webkit-transition: All 1s ease-in-out;
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  letter-spacing: .15em;

  ${StyledBackground}:hover & {
    opacity: 1;
    animation:
    typing 2.0s steps(30, end),
    blink-caret 2s step-end infinite;
  
  @keyframes typing {
    from {width: 0} to {width: 20%}
  }
  @keyframes blink-caret {
    from, to {border-color: transparent}
    50% {border-color: orange; }
   }
 }
 @media (max-width: 375px){
  width: 240px;
  font-family: "Times New Roman";
  color: white;
  font-size: 20px;
  @keyframes typing {
    from {width: 0} to {width: 60%}
  }
  @keyframes blink-caret {
    from, to {border-color: transparent}
    50% {border-color: orange; }
   }
 }
`;

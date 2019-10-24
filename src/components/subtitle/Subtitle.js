import styled from 'styled-components';
import { StyledBackground } from '../background/Background';

export const StyledSubtitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.thin};
  font-size: ${({ isBig }) => (isBig ? '1.5em' : '.5em')};
  font-family: "Times New Roman";
  text-decoration: none;
  text-align: center;
  width: 275px;
  opacity: 0;
  -webkit-transition: All 1s ease-in-out;
  white-space: nowrap;
  justify-content: center;
  margin-top: 250px;
  letter-spacing: .15em;
  border: 2px solid orange;
  border-radius: 5px;
  box-shadow: 10px 10px 10px gray;
  
  ${StyledBackground}:hover & {
    opacity: 1;  
 };
 @media(max-width: 375px){
 }
`;

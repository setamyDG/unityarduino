import styled from 'styled-components';

export const MenuLogo = styled.img`
  width: 90px;
  height: 70px;
  opacity: .5;
  border: 2px solid orange;
  -webkit-transition: All 1s ease-in-out;
  margin-right: 5%;
  :hover  {
    cursor: pointer;
    opacity: 1.5
    
 };
 @media(max-width: 375px){
  display: none;
 }
`;

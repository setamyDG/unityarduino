import styled from 'styled-components';

export const TextInMenu = styled.p`
  color: white;
  font-family: "Times New Roman";
  font-size: 14px;
  margin-right: 50px;
  margin-left: 40px;
  opacity:.5;
  align-self: center;
  position: center;
  justify-content: center;
  -webkit-transition: All 1s ease-in-out;
  text-align: center;
   :hover {
    cursor: pointer;
    opacity:1
 };
 @media(max-width: 375px){
  margin-right: 4px;
  margin-left: 4px;
  font-size: 10px;
 }
`;

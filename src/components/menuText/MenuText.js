import posed from 'react-pose';
import styled from 'styled-components';

const PosedMenuText = posed.p({
  yMovePosition: {
    y: '90px',
  },
  yStayPosition: {
    y: '50%',
  },
});

export const MenuText = styled(PosedMenuText)`
  color: white;
  flex-direction: column;
  justify-content: center;
  font-family: "Times New Roman";
  font-size: ${({ fontSize }) => fontSize};
  -webkit-transition: All 1.65s ease-in-out;
  @media(max-width: 375px){
  display: none;
 }
 :hover {
 cursor: pointer;
 }
`;

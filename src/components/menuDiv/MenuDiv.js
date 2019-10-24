import posed from 'react-pose';
import styled from 'styled-components';

const posedMenuDiv = posed.div({
  visible: {
    y: '0%',
  },
  hidden: {
    y: '-120%',
  },
});

export const StyledMenuDiv = styled(posedMenuDiv)`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: lightcoral;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: 1;
  flex-direction: row;
   -webkit-transition: All 1s ease-in-out;
   box-shadow: 10px 10px 10px gray;
  @media(max-width: 375px){
  width: 100%;
  height: 70px;
  margin-top: -142%;
 }
 :hover{
 opacity: 1;
 }
`;

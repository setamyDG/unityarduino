import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuLogo } from '../components/logoInMenu/LogoInMenu';
import { TextInMenu } from '../components/textInMenu/TextInMenu';
import { StyledMenuDiv } from '../components/menuDiv/MenuDiv';
import { MenuText } from '../components/menuText/MenuText';

export const Div1 = styled.div`
width: 100%;
height: 20px;
position: fixed;
background: transparent;
align-items: center;
justify-content: center;
margin-top: -23%
`;

export const Div12 = styled.div`
width: 100%;
height: 40px;
background: transparent;
align-items: center;
justify-content: center;
text-align: center;
opacity: 1;
`;

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      yMovePosition: false,
    };
  }

    toggleHeaders = () => {
      this.setState((prevState) => ({ visible: !prevState.visible }));
      this.setState((prevState) => ({ yMovePosition: !prevState.yMovePosition }));
    };

    render() {
      return (

        <Div1>
          <StyledMenuDiv pose={this.state.visible ? 'visible' : 'hidden'}>
            <MenuLogo src={require('../assets/images/sunglasses.png')} />
            <TextInMenu as={Link} to="/Optyka">OPTYKA</TextInMenu>
            <TextInMenu>TERMINARZ</TextInMenu>
            <TextInMenu>PRACA</TextInMenu>
            <TextInMenu>DOŚWIADCZENIE</TextInMenu>
            <TextInMenu>BADANIE</TextInMenu>
            <TextInMenu>KONTAKT</TextInMenu>
          </StyledMenuDiv>
          <Div12>
            <MenuText onClick={this.toggleHeaders} pose={this.state.yMovePosition ? 'yMovePosition' : 'yStayPosition'} fontSize="15px">| MENU |</MenuText>
          </Div12>
        </Div1>

      );
    }
}
export default DropDownMenu;

import React, { Component } from 'react';
import { StyledBackground } from '../../components/background/Background';
import { Title } from '../../components/title/Title';
import { StyledSubtitle } from '../../components/subtitle/Subtitle';
import { StyledIconsDiv } from '../../components/iconsDiv/IconsDiv';
import { StyledIconFb, StyledIconInsta, StyledIconMail } from '../../components/socialIcons/SocialIcons';
// crtl alt shift j = zaznczenie jedenej nazwy wszedzie

class HomePage extends Component {
  render() {
    return (
      <StyledBackground>
        <Title>Katarzyna Olszewska</Title>
        <StyledSubtitle isBig>Optyk Okularowy</StyledSubtitle>
        <StyledIconsDiv>
          <StyledIconFb />
          <StyledIconInsta />
          <StyledIconMail />
        </StyledIconsDiv>
      </StyledBackground>
    );
  }
}

export default HomePage;

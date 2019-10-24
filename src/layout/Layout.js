import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../constants/Theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    color: white;
    overflow: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
  
`;
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;

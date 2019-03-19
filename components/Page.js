import React from "react";
import { inject, observer } from "mobx-react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1200px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SF Pro Display' ;
  src: url('/static/SF-Pro-Display-medium-webfont.otf') format('otf');
  font-weight: normal;
  font-style: normal;

}
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'SF Pro Display';

  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

@inject("store")
@observer
class Page extends React.Component {
  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
        <GlobalStyle />
      </>
    );
  }
}

export default Page;

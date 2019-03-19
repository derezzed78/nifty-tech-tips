import Link from "next/link";
import styled from "styled-components";
import { Image, Box, Flex, Button } from "rebass";

const StyledButton = styled(Button)`
  background-color: #0fb5ba;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#f4f4f4, 0.2);

    ::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
`;

const Nav = () => {
  return (
    <Flex alignItems="baseline">
      <Box width="auto">
        <Link href="/other">
          <a>Search</a>
        </Link>
      </Box>
      <Box width={4 / 5} ml={5}>
        <Link href="/post">
          <StyledButton>Submit a NIFTY hack</StyledButton>
        </Link>
      </Box>
    </Flex>
  );
};

const StyledHeader = styled.header`
  .bar {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 0px 1.5rem 3.5rem rgba(37, 41, 82, 0.06),
      0px 0.5rem 1.5rem rgba(0, 0, 0, 0.0301461);
    padding: 1.5rem;
  }
  .logo {
    display: flex;
    align-items: center;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Link href="/">
        <div className="logo">
          <Image width={[1 / 4]} src="../static/logo.png" />
          <a style={{ paddingLeft: "0.5rem" }}>
            <b>NIFTY</b>
          </a>
        </div>
      </Link>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;

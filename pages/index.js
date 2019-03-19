import Link from "next/link";
import { Flex, Box, Button } from "rebass";
import styled from "styled-components";
import Card from "../components/Card";

const Div = styled(Flex)({
  display: "grid",
  gridGap: 18,
  gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))"
});

const StyledInput = styled.input`
  border-radius: 4px;
  /* height: 5rem; */
  font-size: 1.5rem;
  padding: 1.5rem;
  border: none;
  background: #edeff2;
  width: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Counter = () => {
  return (
    <>
      <Flex mb={20}>
        <Box width={3 / 4}>
          <h1>Nifty Tips</h1>
          <p>
            Mollit veniam sit sint enim occaecat duis consectetur excepteur sunt
            occaecat nostrud. Esse magna officia excepteur cupidatat. Minim elit
            ullamco non officia mollit consequat cillum exercitation minim enim
            laboris cillum.
          </p>
        </Box>
      </Flex>
      <Flex justifyContent="center" py={30}>
        <Box color="white" width={[1, 1 / 2]}>
          <StyledInput
            type="text"
            value=""
            placeholder="Enter your keyword(s)"
          />
        </Box>
        <Box color="white">
          <StyledButton bg="#0fb5ba">Search</StyledButton>
        </Box>
      </Flex>
      <Div my={4}>
        <Card title="Create a new Google document by using short .new URL" />
        <Card title="Create a new Google document by using short .new URL" />
        <Card title="Create a new Google document by using short .new URL" />
        <Card title="Create a new Google document by using short .new URL" />
        <Card title="Create a new Google document by using short .new URL" />
        <Card title="Create a new Google document by using short .new URL" />
        <Card title="Create a new Google document by using short .new URL" />
        <Card title="Create a new Google document by using short .new URL" />
      </Div>
    </>
  );
};

export default Counter;

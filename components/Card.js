import { Box, Heading } from "rebass";
import styled from "styled-components";

const StyledBox = styled(Box)({
  // border: "solid #3AE7E1 2px",
  borderadius: 8,
  boxShadow:
    "0px 15px 35px #3ae7e105, 0px 5px 15px rgba(37,41,82,0.06), 0px 5px 15px rgba(0, 0, 0, 0.03);",
  transition: "transform .3s",
  ":hover": {
    transform: "scale(1.03)"
  }
});

const Card = ({ title }) => {
  return (
    <StyledBox px={2}>
      <Heading fontSize={[1, 2, 3]}>{title}</Heading>
      <p>
        <a href="https://doc.new">doc.new</a>
      </p>
      <p>
        <a href="https://sheet.new">sheet.new</a>
      </p>
      <p>
        <a href="https://slide.new">slide.new</a>
      </p>
    </StyledBox>
  );
};

export default Card;

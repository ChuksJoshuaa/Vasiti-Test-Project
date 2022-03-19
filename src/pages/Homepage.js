import React from "react";
import styled from "styled-components";
import { Hero, Content, Happy, Main, Extra, News } from "../components";

const Homepage = () => {
  return (
    <Wrapper>
      <div>
        <Hero />
        <Happy />
        <Content />
        <Main />
        <Extra />
        <News />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow-x: hidden;
`;

export default Homepage;

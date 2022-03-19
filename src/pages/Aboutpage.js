import React from "react";
import styled from "styled-components";
import image from "../static/images/happy2.jpg";

const Aboutpage = () => {
  return (
    <main>
      <Wrapper className="page section">
        <div className="section-center">
          <img src={image} alt="shaving" data-aos={"zoom-in-right"} />
          <article data-aos={"zoom-in-left"}>
            <div className="title">
              <h2>
                We Provide The Best E-Commerce Experience & Also Empower
                Students
              </h2>
            </div>
            <p>
              Vasiti is a fast-growing brand that builds technology platforms
              and optimizes the e-commerce supply chain to help student
              entrepreneurs scale their small businesses through selling their
              products or services easily to a larger market, gaining all-round
              support needed to scale and delivering optimum value to customers.
            </p>
          </article>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  margin-bottom: 5%;

  section {
    padding: 5rem 0;
  }
  .page {
    min-height: calc(100vh - (20vh + 10rem));
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
  }

  @media screen and (max-width: 992px) {
    .section-center {
      width: 90vw;
      grid-template-columns: 1fr;
      place-items: center;
    }
  }
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    height: 350px;
    margin-top: 5%;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #222;
    font-family: "Rajdhani", sans-serif;
  }
  .title {
    text-align: left;
    font-size: 1rem;
    letter-spacing: 0.125rem;
    font-weight: 600;
    color: crimson;
    margin-top: 4%;
    font-family: "Rajdhani", sans-serif;
  }

  .title h2 {
    font-size: 1.6em;
  }

  p {
    font-size: 1.2em;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    img {
      height: 300px;
    }

    .title h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export default Aboutpage;

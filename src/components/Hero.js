import React from "react";
import styled from "styled-components";
import image from "../static/images/happy1.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Abel&family=Smooch+Sans:wght@200;400&display=swap"
        rel="stylesheet"
      />
      <main>
        <div className="hero-head">
          <div className="hero-body">
            <div className="hero-child">
              <h1>Amazing Experiences from our wonderful customers</h1>
              <p>
                Here is what customers and vendors are saying about us, you can
                also share your stories too
              </p>
            </div>
            <img className="image-child" src={image} alt="logo" />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  height: 500px;
  width: 100%;
  background: #fff;

  .hero-head {
    max-width: 1100px;
    width: 90vw;
    margin: 0 auto;
  }

  .hero-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .hero-child {
    margin-top: 4%;
    padding: 6em 0;

    h1 {
      font-family: "Smooch Sans", sans-serif;
      font-size: 3em;
      font-weight: 600;
      text-transform: capitalize;
    }

    p {
      font-family: "Abel", sans-serif;
      font-weight: 200;
      font-size: 1em;
      width: 90%;
    }
  }

  .image-child {
    margin-top: 3%;
  }

  @media screen and (max-width: 1038px) {
    height: auto;
    margin-bottom: 0;

    .image-child {
      padding: 3em 0;
      width: 100%;
      height: 450px;
    }

    .hero-child {
      h1 {
        font-size: 2em;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .hero-body {
      grid-template-columns: 1fr;
    }

    .hero-child {
      padding: 2em 0;
      margin-top: 2%;
    }

    .image-child {
      padding: 0;
      height: 300px;
    }
  }
`;

export default Hero;

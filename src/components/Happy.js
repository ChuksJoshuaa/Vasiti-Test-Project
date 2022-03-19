import React from "react";
import styled from "styled-components";
import img from "../static/images/happy2.jpg";

const Happy = () => {
  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Abel&family=Smooch+Sans:wght@200;400&display=swap"
        rel="stylesheet"
      />
      <div className="happy-head">
        <div className="happy-body">
          <img className="image-lady" src={img} alt="img" />
          <div className="happy-child">
            <h1>Nneka's Experience</h1>
            <p className="btn btn-secondary">customer</p>
            <h3>
              I had the best shopping experience with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. Vasiti provide the best shopping experience, compared
              to other platform and I would definitely be coming back. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui
              maxime quisquam suscipit repellat, nisi excepturi harum! Quam,
              enim debitis. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Perspiciatis, numquam!!
            </h3>
            <h4>Share your own story!</h4>
            <h5></h5>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background: #222;

  .happy-head {
    max-width: 1100px;
    width: 90vw;
    margin: 0 auto;

    .happy-body {
      display: grid;
      grid-template-columns: 60% 40%;
      grid-gap: 10px;

      .image-lady {
        margin-top: 3%;
        border-radius: 40% 30%;
        object-fit: cover;
        height: 380px;
        width: 90%;
      }

      .happy-child {
        h1 {
          font-family: "Smooch Sans", sans-serif;
          font-size: 2em;
          line-height: 1.5;
          letter-spacing: 0.125rem;
          font-weight: 500;
          color: white;
          margin-top: 7%;
        }

        p {
          color: white;
          border: 1px solid silver;
          text-align: center;
          letter-spacing: 0.125rem;
          text-transform: uppercase;
          font-size: 0.5em;
          padding: 0.4em;
          border-radius: 0;
        }

        h3 {
          font-size: 1em;
          color: white;
          font-family: "Smooch Sans", sans-serif;
          width: 100%;
          line-height: 1.5;
          padding: 1.5em 0 0 0;
        }

        h4 {
          margin-top: 1em;
          font-size: 1.3em;
          color: white;
          text-transform: uppercase;
          font-family: "Smooch Sans", sans-serif;
        }

        h5 {
          width: 20%;
          height: 4px;
          background: orangered;
        }
      }
    }
    @media screen and (max-width: 852px) {
      /* .happy-body {
        grid-template-columns: 1fr;
      } */

      .happy-body {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    @media screen and (max-width: 400px) {
      .happy-body {
        .happy-child {
          h5 {
            width: 40%;
          }
        }
      }
    }
  }
`;

export default Happy;

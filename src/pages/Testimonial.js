import React, { useState } from "react";
import styled from "styled-components";
import { people } from "../junk";
import { FaGlobe } from "react-icons/fa";
const Testimonial = () => {
  const [data, setData] = useState(people);
  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Abel&family=Smooch+Sans:wght@200;400&display=swap"
        rel="stylesheet"
      />
      <div className="content-head">
        <div className="content-body">
          {data.map((item) => {
            const { id, name, image, comment, category, state } = item;
            return (
              <div key={id} className="content-child" data-aos={"zoom-in"}>
                <img src={image} alt={name} />
                <h1>{name}</h1>
                <h2>
                  <FaGlobe />
                  {state} <span className="btn btn-secondary">{category}</span>{" "}
                </h2>
                <p>{comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 3em;
  margin-bottom: 5em;
  width: 100%;

  .content-head {
    max-width: 1100px;
    width: 90vw;
    margin: 0 auto;

    .content-body {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;

      .content-child {
        img {
          width: 200px;
          height: 220px;
          border-radius: 50%;
        }

        h1 {
          font-family: "Smooch Sans", sans-serif;
          font-size: 1.6em;
          font-weight: 600;
          text-transform: capitalize;
          margin-top: 1em;
          letter-spacing: 0.125rem;
        }

        h2 {
          font-family: "Smooch Sans", sans-serif;
          font-size: 1em;
          font-weight: 400;
          text-transform: capitalize;

          span {
            color: green;
            background: white;
            border: 1px solid white;
            text-align: center;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            font-size: 0.7em;
            padding: 0.4em;
            font-weight: bold;
            border-radius: 0;
            margin-left: 3em;
          }
        }

        p {
          font-size: 1em;
          font-family: "Smooch Sans", sans-serif;
          font-weight: 550;
          width: 90%;
          line-height: 1.5;
        }
      }
    }

    @media screen and (max-width: 950px) {
      .content-body {
        grid-template-columns: 1fr 1fr;
        place-items: center;
      }
    }

    @media screen and (max-width: 520px) {
      .content-body {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Testimonial;

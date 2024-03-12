import styled from "styled-components";

export const SProduct = styled.div`
  width: 30rem;
  height: 40vh;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 2rem;
    font-weight: 600;

    width: 100%;
    text-align: justify;
    padding: 0 1rem;
  }

  > div {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  > img {
    height: 80%;
    width: auto;
  }
`;

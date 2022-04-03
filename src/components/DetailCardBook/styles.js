import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  padding: 64px 16px 16px 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Close = styled.div`
  width: 32px;
  height: 32px;

  background-color: var(--white);
  border-radius: 50%;
  border: 1px solid #33333333;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: absolute;
  right: 15px;
  top: 15px;

  svg {
    font-size: 10px;
    color: var(--gray);
  }
`;

export const Card = styled.div`
  width: 288px;
  height: 85vh;
  border-radius: 4px;
  background-color: var(--white);
  color: var(--gray);

  overflow: auto;

  padding: 24px;

  .book_cover {
    width: 240px;
    height: 350px;
    filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));
  }

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 400px;

    display: grid;
    grid-template-columns: 320px 300px;
    grid-gap: 0 20px;

    /* padding: 30px; */

    .book_cover {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) and (min-height: 800px) {
    height: 600px;
  }
`;

export const Info = styled.div`
  .book_title {
    font-size: 28px;
    font-weight: 500;
    line-height: 40px;
  }
  .book_authors {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;

    color: var(--dark_pink);
  }
`;

export const InfoDetail = styled.div`
  margin: 32px 0;

  & * {
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
  }

  p {
    display: flex;
    justify-content: space-between;

    span:last-child {
      color: #999999;
    }
  }
`;

export const Review = styled.div`
  & * {
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
  }

  h2 {
  }

  blockquote {
    color: #999999;
  }
`;

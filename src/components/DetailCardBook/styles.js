import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  background-size: contain;

  padding: 64px 16px 16px 16px;

  /* z-index: 1; */
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

export const Info = styled.div`
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

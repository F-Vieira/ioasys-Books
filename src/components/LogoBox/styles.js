import styled from "styled-components";

export const Container = styled.section`
  min-width: 288px;
  display: flex;

  color: ${({ whiteMode }) => (whiteMode ? "#FFFFFF" : "#333333")};

  h1 {
    margin-left: 16.6px;
    font-weight: lighter;
    font-size: 28px;
  }

  @media screen and (min-width: 768px) {
    line-height: 60px;

    img {
      width: 170px;
      height: 60px;
    }

    h1 {
      font-size: 60px;
    }
  }
`;

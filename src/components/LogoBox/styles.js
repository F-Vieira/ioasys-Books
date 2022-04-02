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
    line-height: ${({ isPageLogin }) => (isPageLogin ? "60px" : "36px")};

    img {
      width: ${({ isPageLogin }) => (isPageLogin ? "170px" : "104px")};
      height: ${({ isPageLogin }) => (isPageLogin ? "60px" : "36px")};
    }

    h1 {
      font-size: ${({ isPageLogin }) => (isPageLogin ? "60px" : "28px")};
    }
  }
`;

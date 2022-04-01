import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  color: ${({ whiteMode }) => (whiteMode ? "#FFFFFF" : "#333333")};

  h1 {
    margin-left: 16.6px;
    font-weight: lighter;
    font-size: 28px;
  }
`;

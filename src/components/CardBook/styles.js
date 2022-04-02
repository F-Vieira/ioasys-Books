import styled from "styled-components";

export const Container = styled.div`
  width: 288px;
  height: 160px;
  background-color: var(--white);
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 272px;
  }
`;

export const Cover = styled.img`
  width: 80px;
  height: 115px;
`;

export const Info = styled.div`
  width: 130px;
  height: 115px;
  overflow: auto;
`;

export const TitleAuthors = styled.div`
  margin-bottom: 8px;

  h1 {
    font-size: 14px;
    font-weight: 500;
    color: var(--gray);
    word-wrap: break-word;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--dark_pink);
  }
`;

export const MoreInfo = styled.div`
  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--light_gray);
  }
`;

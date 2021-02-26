import styled from "styled-components";

export const HeroContentMobileWraper = styled.div`
  position: relative;
  top: 7rem;
  padding: 2rem;
  font-family: inherit;
  display: none;
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2.4rem;
    padding: 1.5rem 0;
    font-weight: 300;
  }

  @media only screen and (max-width: 1068px) {
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

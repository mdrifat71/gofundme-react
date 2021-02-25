import styled from "styled-components";

export const HeroWraper = styled.section`
  width: 100vw;
  height: 98vh;
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeroCarouselItem = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.2s;
  display: flex;
  align-items: flex-end;
  justify-content: left;
  h4 {
    width: 114rem;
    padding: 1.5rem 0;
    text-align: left;
    color: #fff;
    font-size: 1.7rem;
    font-weight: normal;
  }
`;

export const HeroContentWraper = styled.div`
  z-index: 3;
  width: 58%;
  font-family: inherit;
  color: #fff;
  h1 {
    margin-bottom: 2rem;
    font-size: 4rem;

    font-family: inherit;
    font-weight: 900;
  }

  h3 {
    font-family: inherit;
    font-size: 2.5rem;
    font-weight: 300;
  }

  @media only screen and (max-width: 1068px) {
    display: none;
  }
`;

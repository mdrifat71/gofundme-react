import styled from "styled-components";

export const IntroVideoContainer = styled.div`
  width: 100%;
  padding: 3rem;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    overflow-y: auto;
    margin-bottom: 0;
    padding-bottom: 2rem;
  }
`;

export const ButtonDesktop = styled.div`
  display: inline-block;
  @media only screen and (max-width: 1068px) {
    display: none;
  }
`;

export const IntroVideoHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-family: inherit;
  h2 {
    color: #333;
    font-size: 3rem;
    font-weight: 900;

    @media only screen and (max-width: 1068px) {
      font-size: 2.5rem;
      font-weight: 700;
    }

    @media only screen and (max-width: 768px) {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export const IntroVideoContent = styled.div`
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const IntroVideoMobileButton = styled.div`
  justify-content: center;
  margin-top: 2rem;
  display: none;
  @media only screen and (max-width: 1068px) {
    display: flex;
  }
`;

export const IntroVideoWraper = styled.div`
  width: 100%;
  padding-top: 5rem;

  @media only screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

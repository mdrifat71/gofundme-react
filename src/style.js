import styled from "styled-components";

export const Container = styled.div`
  max-width: 116rem;
  margin: 0 auto;
`;

export const FixedOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 110;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;

  display: ${(props) => props.display};
  background-color: rgba(51, 51, 51, 0.45);
`;

/**
 * [Start a gofundme button]
 */

export const GoFundMeButton = styled.button`
  cursor: pointer;

  background: #02a95c;
  padding: 1.5rem 3rem;
  font-weight: 900;
  font-size: 1.8rem;
  border: 0;
  outline: 0;
  text-align: center;
  color: #fff;
  font-family: inherit;
  border-radius: 4px;
  min-width: ${(props) => props.minWidth || "auto"};
  max-width: ${(props) => props.maxWidth && props.maxWidth};
  width: ${(props) => props.width || "auto"};

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 360px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const GoFundMeVideoButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-weight: 900;
  font-size: 1.6rem;
  border: 0;
  outline: 0;
  text-align: center;
  color: #fff;
  font-family: inherit;
  border-radius: 4px;
  min-width: ${(props) => props.minWidth || "auto"};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width};

  height: 5rem;
  display: flex;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  svg {
    font-size: 5rem;
    margin-right: 2rem;
  }

  @media only screen and (max-width: 1068px) {
    color: #333;
  }

  @media only screen and (max-width: 360px) {
    width: 100%;
    min-width: 100%;
  }
`;

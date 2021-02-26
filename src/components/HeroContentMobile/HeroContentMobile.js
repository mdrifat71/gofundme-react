import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import { Container, GoFundMeButton, GoFundMeVideoButton } from "../../style";
import { useBaseLayer } from "../../utilities";

import {
  ButtonContainer,
  HeroContentMobileWraper,
} from "./HeroContentMobileItem";

function HeroContentMobile({ videoToggle }) {
  const [state, dispatch] = useBaseLayer();
  return (
    <section>
      <HeroContentMobileWraper>
        <Container>
          <h1>Fundraising for the people and causes you care about</h1>
          <h3>Get Started Today.</h3>
          <ButtonContainer>
            <GoFundMeButton maxWidth="36rem" minWidth="36rem">
              Start a GoFundMe
            </GoFundMeButton>
          </ButtonContainer>
          <ButtonContainer>
            <GoFundMeVideoButton
              onClick={() => {
                dispatch({
                  type: "OPEN_VIDEO",
                });
              }}
              style={{ marginTop: "1rem" }}
              maxWidth="36rem"
              minWidth="36rem"
            >
              <FiPlayCircle />
              See how GoFundMe works
            </GoFundMeVideoButton>
          </ButtonContainer>
        </Container>
      </HeroContentMobileWraper>
    </section>
  );
}

export default HeroContentMobile;

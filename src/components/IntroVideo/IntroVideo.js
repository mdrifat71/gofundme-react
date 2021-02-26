import { Grid } from "@material-ui/core";
import React from "react";
import { Container, FixedOverlay, GoFundMeButton } from "../../style";
import {
  ButtonDesktop,
  IntroVideoContainer,
  IntroVideoContent,
  IntroVideoHeading,
  IntroVideoMobileButton,
  IntroVideoWraper,
} from "./IntroVideoItem";
import { FaTimes } from "react-icons/fa";
import { useBaseLayer } from "../../utilities";
import { Link } from "react-router-dom";
function IntroVideo() {
  const [state, dispatch] = useBaseLayer();
  return (
    <>
      <FixedOverlay>
        <IntroVideoWraper>
          <Container>
            <IntroVideoContainer>
              <IntroVideoHeading>
                <h2>How it Works | GoFundMe</h2>
                <div>
                  <ButtonDesktop>
                    <GoFundMeButton width={"30rem"}>
                      <Link to="/start">Start a GoFundMe</Link>
                    </GoFundMeButton>
                  </ButtonDesktop>

                  <FaTimes
                    style={{
                      marginLeft: "3rem",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      dispatch({ type: "HIDE_VIDEO" });
                    }}
                  />
                </div>
              </IntroVideoHeading>

              <IntroVideoContent>
                <iframe
                  frameborder="0"
                  allowFullScreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="YouTube video player"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/EVkA8WWMCss?autoplay=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.gofundme.com&amp;widgetid=1"
                  data-gtm-yt-inspected-995711_179="true"
                  data-gtm-yt-inspected-1_25="true"
                ></iframe>
              </IntroVideoContent>
              <IntroVideoMobileButton>
                <GoFundMeButton width={"100%"} maxWidth="40rem">
                  <Link to="/start">Start a GoFundMe</Link>
                </GoFundMeButton>
              </IntroVideoMobileButton>
            </IntroVideoContainer>
          </Container>
        </IntroVideoWraper>
      </FixedOverlay>
    </>
  );
}

export default IntroVideo;

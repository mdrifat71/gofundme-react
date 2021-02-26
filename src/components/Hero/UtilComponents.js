import react from "react";
import { Container } from "../../style";
import { GFMButtonGroup, useBaseLayer } from "../../utilities";
import { HeroContentWraper } from "./HeroItem";

export const HeroContent = ({ desktop }) => {
  const [state, dispatch] = useBaseLayer();

  const videoToggleHandler = () => {
    console.log("pressed");
    dispatch({
      type: "OPEN_VIDEO",
    });
  };
  return (
    <Container style={{ zIndex: 3, width: "116rem", paddingLeft: "2rem" }}>
      <HeroContentWraper desktop={desktop}>
        <h1>Fundraising for the people and causes you care about</h1>
        <h3>Get Started Today.</h3>

        <div style={{ marginTop: "3.5rem" }}>
          <GFMButtonGroup videoToggleHandler={videoToggleHandler} />
        </div>
      </HeroContentWraper>
    </Container>
  );
};

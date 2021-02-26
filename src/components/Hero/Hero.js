import React, { useEffect, useState } from "react";

/**image */
import one from "./image/1.jpg";
import two from "./image/2.jpg";
import three from "./image/3.jpg";
import four from "./image/4.jpg";
import five from "./image/5.jpg";
import six from "./image/6.jpg";

/** HeroItem*/
import { HeroCarouselItem, HeroContentWraper, HeroWraper } from "./HeroItem";
import { Container } from "../../style";
import { Grid } from "@material-ui/core";
import { HeroContent } from "./UtilComponents";
import IntroVideo from "../IntroVideo/IntroVideo";
import { useBaseLayer } from "../../utilities/";
function Hero() {
  const [state, dispatch] = useBaseLayer();
  /**
   * carousel effect
   */

  const getNexItem = (length, current) => {
    if (current + 1 == length) return 0;
    return ++current;
  };

  const carouselEffect = () => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const length = carouselItems.length;
    let activeCarousel = 0;
    carouselItems[activeCarousel].style.opacity = 1;

    setInterval(() => {
      let next = getNexItem(length, activeCarousel);
      carouselItems[next].style.opacity = 1;
      carouselItems[activeCarousel].style.opacity = 0;

      // console.log(carouselItems[next]);
      activeCarousel++;
      if (activeCarousel === length) activeCarousel = 0;
    }, 5000);
  };

  /**
   * toggle video
   */

  /** Effect */
  useEffect(() => {
    carouselEffect();
  }, []);
  return (
    <>
      <HeroWraper>
        {state.video && <IntroVideo />}
        <HeroContent desktop={true} />
        <HeroCarouselItem
          className="carousel-item"
          style={{ backgroundImage: `url(${one})` }}
        >
          <div style={{ width: "100%" }}>
            <Container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h4>Justin raised over $700</h4>
            </Container>
          </div>
        </HeroCarouselItem>
        <HeroCarouselItem
          className="carousel-item"
          style={{ backgroundImage: `url(${two})` }}
        ></HeroCarouselItem>
        <HeroCarouselItem
          className="carousel-item"
          style={{ backgroundImage: `url(${three})` }}
        ></HeroCarouselItem>
        <HeroCarouselItem
          className="carousel-item"
          style={{ backgroundImage: `url(${four})` }}
        ></HeroCarouselItem>
        <HeroCarouselItem
          className="carousel-item"
          style={{ backgroundImage: `url(${five})` }}
        ></HeroCarouselItem>
        <HeroCarouselItem
          className="carousel-item"
          style={{ backgroundImage: `url(${six})` }}
        ></HeroCarouselItem>
        -
      </HeroWraper>
    </>
  );
}

export default Hero;

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
import { GFMButtonGroup } from "../../utilities";

function Hero() {
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

  /** Effect */
  useEffect(() => {
    carouselEffect();
  }, []);
  return (
    <>
      <HeroWraper>
        <Container style={{ zIndex: 3, width: "116rem", paddingLeft: "2rem" }}>
          <HeroContentWraper>
            <h1>Fundraising for the people and causes you care about</h1>
            <h3>Get Started Today.</h3>

            <div style={{ marginTop: "3.5rem" }}>
              <GFMButtonGroup />
            </div>
          </HeroContentWraper>
        </Container>
        <HeroCarouselItem
          className="carousel-item"
          style={{ backgroundImage: `url(${one})` }}
        >
          <Container>
            <h4>Justin raised over $700</h4>
          </Container>
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

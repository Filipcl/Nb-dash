import React from "react";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={150}
      totalSlides={3}
      isPlaying={true}
      interval={8000}
    >
      <Slider>
        <Slide className="slide" index={0}>
          <iframe
            title="1"
            width="750"
            height="464"
            seamless
            frameBorder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQerZOGkM4-4slIOiDVLD4fJbtU_13a4O0A75ZBPXlWLbPMjhtMkVCNfQCjU5jO3dE_secXVU4bSG6q/pubchart?oid=171757654&amp;format=interactive"
          ></iframe>
        </Slide>
        <Slide className="slide" index={1}>
          <iframe
            title="2"
            width="757"
            height="464"
            seamless
            frameBorder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQerZOGkM4-4slIOiDVLD4fJbtU_13a4O0A75ZBPXlWLbPMjhtMkVCNfQCjU5jO3dE_secXVU4bSG6q/pubchart?oid=809200848&amp;format=interactive"
          ></iframe>
        </Slide>
        <Slide className="slide" index={2}>
          <iframe
            title="3"
            width="600"
            height="371"
            seamless
            frameBorder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQerZOGkM4-4slIOiDVLD4fJbtU_13a4O0A75ZBPXlWLbPMjhtMkVCNfQCjU5jO3dE_secXVU4bSG6q/pubchart?oid=1498342867&amp;format=interactive"
          ></iframe>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default Carousel;

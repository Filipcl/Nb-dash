import React from "react";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({}));

function Carousel() {
  const classes = useStyles();
  return (
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={150}
      totalSlides={3}
      isPlaying={true}
      interval={8000}
    >
      <Slider className={classes.slider}>
        <Slide className={classes.slide} index={0}>
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
        <Slide className={classes.slide} index={1}>
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
        <Slide className={classes.slide} index={2}>
          <iframe
            width="757"
            height="464"
            seamless
            frameborder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRxefFjTMK9VlRnfDJM9bCZAs-gQxg35EWFxMQD1La35dmIb8y472Ui-abBYqr-QZpdDBt1GErpXg9G/pubchart?oid=1362276494&amp;format=interactive"
          ></iframe>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default Carousel;

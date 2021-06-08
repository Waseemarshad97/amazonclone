import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselCont = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 blur"
            src="../images/sliderimg1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 blur"
            src="../images/sliderimg2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 blur"
            src="../images/sliderimg3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 blur"
            src="../images/sliderimg4.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel >
    </div>
  )
}
export default CarouselCont;
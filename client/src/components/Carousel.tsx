import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
  images: string[];
};

function Carousel({ images }: CarouselProps): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} style={{ width: '800px', height: '500px' }}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ width: '800px', height: '500px' }} />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;

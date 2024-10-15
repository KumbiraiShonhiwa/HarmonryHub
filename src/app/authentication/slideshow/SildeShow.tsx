import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <Card>
        <CardContent>
          <Typography variant="h5">Slide 1</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5">Slide 2</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5">Slide 3</Typography>
        </CardContent>
      </Card>
    </Slider>
  );
};

export default MyCarousel;

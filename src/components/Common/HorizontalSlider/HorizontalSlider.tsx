import { Box } from '@mui/material'
import { FC } from 'react'
import Slider from 'react-slick'
import { ArrowNext, ArrowPrev } from '../../SVGComponents'

interface IHorizontalSlider {
  children: React.ReactNode
}
export const HorizontalSlider: FC<IHorizontalSlider> = ({ children }) => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Box width='100%'>
      <Slider {...settings}>{children}</Slider>
    </Box>
  )
}

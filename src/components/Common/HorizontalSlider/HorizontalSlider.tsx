import { Box } from '@mui/material'
import { FC } from 'react'
import Slider from 'react-slick'
import { ArrowNext, ArrowPrev } from '../../SVGComponents'

interface IHorizontalSlider {
  children: React.ReactNode
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}
export const HorizontalSlider: FC<IHorizontalSlider> = (props) => {
  const { children, xs = 1, sm = 2, md = 3, lg = 4, xl = 5, xxl = 6 } = props
  const settings = {
    slidesToShow: xxl,
    slidesToScroll: xxl,
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: xl,
          slidesToScroll: xl
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: lg,
          slidesToScroll: lg
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: md,
          slidesToScroll: md
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: sm,
          slidesToScroll: sm
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: xs,
          slidesToScroll: xs
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

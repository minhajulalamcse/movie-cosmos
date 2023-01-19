import { Card, CardContent, CardMedia, keyframes, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { GlassEffect, RatingWithTooltip } from '../..'
import { BlackImage } from '../../../assets'

interface ICardWithGlassEffect {
  subTitle?: string
  imagePath: string | null
  title: string
  voteAverage?: number | undefined
  link: string
  glassEffect?: boolean
}

export const CardWithGlassEffect: FC<ICardWithGlassEffect> = (props) => {
  const { subTitle, imagePath, title, voteAverage, link, glassEffect } = props
  const move = keyframes`
    from { 
      opacity: 0.15;
    }
    to { 
      opacity: 1;
    }
  `
  const Title = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '16px',
    lineHeight: '18px',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    minHeight: '36px'
  }))
  const Date = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular
  }))

  const CardImage = styled(CardMedia)(({ theme }) => ({
    height: '250px',
    position: 'relative',
    overflow: 'hidden',
    animation: `${move} 3s normal`,
    backgroundColor: '#000000',
    backgroundPosition: 'contain'
  }))

  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2, mb: 1 }}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <CardImage
          image={imagePath !== null ? `https://image.tmdb.org/t/p/w500/${imagePath}` : BlackImage}
          title={title}
        >
          {(glassEffect ?? false) && <GlassEffect />}
        </CardImage>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column ',
            justifyContent: 'flex-start',
            alignItems: 'flex-start !important',
            padding: '16px !important'
          }}
        >
          <Title variant='h6' gutterBottom>
            {title}
          </Title>
          <Date variant='subtitle1' gutterBottom>
            {subTitle}
          </Date>
          {voteAverage !== undefined && <RatingWithTooltip voteAverage={voteAverage} />}
        </CardContent>
      </Link>
    </Card>
  )
}

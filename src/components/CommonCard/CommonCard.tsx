import { Card, CardContent, CardMedia, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { GlassEffect, RatingWithTooltip } from '..'

interface ICommonCard {
  releaseDate: string
  posterPath: string | null
  title: string
  voteAverage: number
  link: string
}

export const CommonCard: FC<ICommonCard> = (props) => {
  const { releaseDate, posterPath, title, voteAverage, link } = props
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
  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <CardMedia
          sx={{ height: '300px', position: 'relative', overflow: 'hidden' }}
          image={posterPath !== null ? `https://image.tmdb.org/t/p/w500/${posterPath}` : ''}
          title={title}
        >
          <GlassEffect />
        </CardMedia>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column ', justifyContent: 'flex-start', alginItems: 'flex-start' }}
        >
          <Title variant='h6' gutterBottom>
            {title}
          </Title>
          <Date variant='subtitle1' gutterBottom>
            {releaseDate}
          </Date>
          <RatingWithTooltip voteAverage={voteAverage} />
        </CardContent>
      </Link>
    </Card>
  )
}

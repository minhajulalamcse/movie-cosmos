import styled from '@emotion/styled'
import { Card, CardMedia } from '@mui/material'
import { FC } from 'react'
import { FeaturedMovieGlassEffect, MovieInformation } from '..'
import { BlackImage } from '../../assets'
import { IMovieDetailsGetResponse } from '../../interfaces/movies/IMovieDetailsGetResponse'

interface IMovieDetailsFeaturedCard {
  movie: IMovieDetailsGetResponse
}
export const MovieDetailsFeaturedCard: FC<IMovieDetailsFeaturedCard> = ({ movie }) => {
  const CardWrapper = styled(Card)(({ theme }) => ({
    boxShadow: '0',
    borderRadius: '0',
    position: 'relative',
    width: '100%'
  }))

  const BackgroundOverlay = styled(Card)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: '#00000030',
    backgroundBlendMode: 'darken'
  }))

  return (
    <CardWrapper>
      <CardMedia
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          width: '100%',
          transition: '0.3s all ease-in-out',
          minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)', lg: '80vh' }
        }}
        image={
          movie?.backdrop_path !== null ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` : BlackImage
        }
        title={movie.title}
      >
        <BackgroundOverlay />
        <FeaturedMovieGlassEffect />
        <MovieInformation movie={movie} />
      </CardMedia>
    </CardWrapper>
  )
}

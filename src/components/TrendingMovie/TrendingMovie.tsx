import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { CardWithGlassEffect, HorizontalSlider } from '..'
import { RootState } from '../../app/store'
import { ITrendingResultObject } from '../../interfaces/trending/ITrendingResultObject'
import { MediaType } from '../../interfaces/trending/MediaType'
import { useGetTrendingQuery } from '../../services/tmdb'

export const TrendingMovie: FC = () => {
  const theme = useTheme()
  const mediaType = MediaType.movie
  const { trendingMovieTimeWindow: timeWindow } = useSelector((state: RootState) => state.trending)
  const { data, isError, isLoading } = useGetTrendingQuery({ mediaType, timeWindow })

  if (data === null || data?.results.length === 0 || isError || isLoading) {
    return null
  }
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start'>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml={2.5}>
        Trending Movies
      </Typography>
      <HorizontalSlider>
        {data?.results.map((movie: ITrendingResultObject, index: number) => {
          return (
            <CardWithGlassEffect
              key={index}
              releaseDate={movie?.release_date}
              title={movie?.title}
              posterPath={movie?.poster_path}
              voteAverage={movie?.vote_average}
              link={`/movie/${movie?.id}`}
            />
          )
        })}
      </HorizontalSlider>
    </Box>
  )
}

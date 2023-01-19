import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { CardWithGlassEffect, HorizontalSlider, LoadingCardList } from '..'
import { RootState } from '../../app/store'
import { IMovieDetailsGetResponse } from '../../interfaces/movies/IMovieDetailsGetResponse'
import { useGetTrendingMoviesQuery } from '../../services/tmdb'

import { MediaType } from '../../types/MediaType'

export const TrendingMovies: FC = () => {
  const theme = useTheme()
  const mediaType = MediaType.movie
  const { trendingMovieTimeWindow: timeWindow } = useSelector((state: RootState) => state.trending)
  const { data, isError, isLoading } = useGetTrendingMoviesQuery({ mediaType, timeWindow })

  if (isLoading) {
    return <LoadingCardList title='Trending Movies' />
  }

  if (data === null || data?.results.length === 0 || isError) {
    return null
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start' px={3} my={3}>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml='10px'>
        Trending Movies
      </Typography>
      <HorizontalSlider>
        {data?.results.map((item: IMovieDetailsGetResponse, index: number) => {
          return (
            <CardWithGlassEffect
              key={index}
              subTitle={item?.release_date}
              title={item?.title}
              imagePath={item?.poster_path}
              voteAverage={item?.vote_average}
              link={`/movie/${item?.id}`}
              glassEffect={true}
            />
          )
        })}
      </HorizontalSlider>
    </Box>
  )
}

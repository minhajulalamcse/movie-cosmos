import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { CardWithGlassEffect, HorizontalSlider, LoadingCardList } from '..'
import { RootState } from '../../app/store'
import { ITVShowDetailsGetResponse } from '../../interfaces/tv/ITVShowDetailsGetResponse'
import { useGetTrendingTVShowsQuery } from '../../services/tmdb'
import { MediaType } from '../../types/MediaType'

export const TrendingTVShows: FC = () => {
  const theme = useTheme()
  const mediaType = MediaType.tv
  const { trendingTVTimeWindow: timeWindow } = useSelector((state: RootState) => state.trending)
  const { data, isError, isLoading } = useGetTrendingTVShowsQuery({ mediaType, timeWindow })

  if (isLoading) {
    return <LoadingCardList title='Trending TV Shows' />
  }

  if (data === null || data?.results.length === 0 || isError) {
    return null
  }
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start'>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml='10px'>
        Trending TV Shows
      </Typography>
      <HorizontalSlider>
        {data?.results.map((item: ITVShowDetailsGetResponse, index: number) => {
          return (
            <CardWithGlassEffect
              key={index}
              subTitle={item?.first_air_date}
              title={item?.name}
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

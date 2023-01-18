import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { CardWithGlassEffect, HorizontalSlider } from '..'
import { RootState } from '../../app/store'
import { IPersonDetailsGetResponse } from '../../interfaces/people/IPersonDetailsGetResponse'
import { useGetTrendingPeopleQuery } from '../../services/tmdb'
import { MediaType } from '../../types/MediaType'

export const TrendingPeople: FC = () => {
  const theme = useTheme()
  const mediaType = MediaType.person
  const { trendingPersonTimeWindow: timeWindow } = useSelector((state: RootState) => state.trending)
  const { data, isError, isLoading } = useGetTrendingPeopleQuery({ mediaType, timeWindow })

  if (data === null || data?.results.length === 0 || isError || isLoading) {
    return null
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start'>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml='10px'>
        Trending People
      </Typography>
      <HorizontalSlider>
        {data?.results.map((item: IPersonDetailsGetResponse, index: number) => {
          return (
            <CardWithGlassEffect
              key={index}
              releaseDate={item?.known_for_department}
              title={item?.name}
              imagePath={item?.profile_path}
              link={`/${item?.id}`}
            />
          )
        })}
      </HorizontalSlider>
    </Box>
  )
}

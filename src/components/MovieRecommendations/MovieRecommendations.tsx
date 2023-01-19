import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IMovieDetailsGetResponse } from '../../interfaces/movies/IMovieDetailsGetResponse'
import { useGetMovieRecommendationsQuery } from '../../services/tmdb'
import { CardWithGlassEffect } from '../Common/CardWithGlassEffect/CardWithGlassEffect'
import { HorizontalSlider } from '../Common/HorizontalSlider/HorizontalSlider'
import { LoadingCardList } from '../Common/LoadingCardList/LoadingCardList'

export const MovieRecommendations: FC = () => {
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isError, isLoading } = useGetMovieRecommendationsQuery(Number(id))

  if (isLoading) {
    return <LoadingCardList title='Recommendations' />
  }

  if (data === null || data?.results.length === 0 || isError) {
    return null
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start'>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml='10px'>
        Recommendations
      </Typography>
      <HorizontalSlider>
        {data?.results.map((item: IMovieDetailsGetResponse, index: number) => {
          return (
            <CardWithGlassEffect
              key={index}
              title={item?.title}
              subTitle={item?.release_date}
              imagePath={item?.poster_path}
              link={`/movie/${item?.id}`}
              glassEffect={true}
            />
          )
        })}
      </HorizontalSlider>
    </Box>
  )
}

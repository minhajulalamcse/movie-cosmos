import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardWithGlassEffect, HorizontalSlider, LoadingCardList } from '..'
import { IMovieCreditsCast } from '../../interfaces/movies/IMovieCreditsCast'
import { useGetCreditsOfMovieQuery } from '../../services/tmdb'

export const TopCast: FC = () => {
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isError, isLoading } = useGetCreditsOfMovieQuery(Number(id))

  if (isLoading) {
    return <LoadingCardList title='Top Cast' />
  }

  if (data === null || data?.cast.length === 0 || isError) {
    return null
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start'>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml='10px'>
        Top Cast
      </Typography>
      <HorizontalSlider>
        {data?.cast.map((item: IMovieCreditsCast, index: number) => {
          return (
            <CardWithGlassEffect
              key={index}
              title={item?.name}
              subTitle={item?.known_for_department}
              imagePath={item?.profile_path}
              link={`/person/${item?.id}`}
            />
          )
        })}
      </HorizontalSlider>
    </Box>
  )
}

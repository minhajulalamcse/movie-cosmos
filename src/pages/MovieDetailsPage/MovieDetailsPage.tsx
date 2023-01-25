import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Error,
  Loading,
  MovieDetailsFeaturedCard,
  MovieRecommendations,
  NoDataFound,
  TopCast
} from '../../components'
import { useGetMovieDetailsQuery } from '../../services/tmdb'

export const MovieDetailsPage: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if (
    (typeof id === 'string' && Number.isNaN(parseInt(id))) ||
    id === undefined
  ) {
    navigate('/')
  }

  const { data, isLoading, isError } = useGetMovieDetailsQuery(Number(id))

  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }
  if (data === null || data === undefined) {
    return <NoDataFound />
  }
  return (
    <Box>
      <MovieDetailsFeaturedCard movie={data} />
      <Container sx={{ m: '24px auto' }}>
        <TopCast />
      </Container>
      {/* <Container sx={{ m: '24px auto' }}>
        <MovieMediaSection />
      </Container> */}
      <Container sx={{ m: '24px auto' }}>
        <MovieRecommendations />
      </Container>
    </Box>
  )
}

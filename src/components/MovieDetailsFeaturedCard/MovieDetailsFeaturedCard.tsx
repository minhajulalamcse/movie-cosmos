import styled from '@emotion/styled'
import { Card, CardMedia } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BlackImage } from '../../assets'
import { useGetMovieDetailsQuery } from '../../services/tmdb'
import { Error } from '../Common/Error/Error'
import { Loading } from '../Common/Loading/Loading'
import { NoDataFound } from '../Common/NoDataFound/NoDataFound'

export const MovieDetailsFeaturedCard: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
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
          minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }
        }}
        image={data?.backdrop_path !== null ? `https://image.tmdb.org/t/p/original/${data?.backdrop_path}` : BlackImage}
        title={data.title}
      >
        <BackgroundOverlay />
        {/* <MovieInformation movie={movie} /> */}
      </CardMedia>
    </CardWrapper>
  )
}

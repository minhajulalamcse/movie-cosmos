import { Box, ImageList } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error, Loading } from '..'
import { IMovieVideo } from '../../interfaces/movies/IMovieVideo'
import { useGetMovieVideosQuery } from '../../services/tmdb'
import { NoDataFound } from '../Common/NoDataFound/NoDataFound'

export const MovieVideos: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isLoading, isError } = useGetMovieVideosQuery(Number(id))

  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }
  if (data === null || data === undefined || data?.results.length === 0) {
    return <NoDataFound />
  }
  console.log(data)
  return (
    <Box>
      <ImageList variant='masonry' cols={3} gap={10}>
        {data.results.map((item: IMovieVideo, index: number) => (
          <Box key={index} border={1}>
            {item?.name}
          </Box>
        ))}
      </ImageList>
    </Box>
  )
}

import { Box, ImageList, ImageListItem } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error, Loading, NoDataFound } from '..'
import { IPersonProfile } from '../../interfaces/people/IPersonProfile'
import { useGetPersonImagesQuery } from '../../services/tmdb'

export const PersonImages: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isLoading, isError } = useGetPersonImagesQuery(Number(id))

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
      <ImageList variant='masonry' cols={3} gap={10}>
        {data?.profiles?.map((item: IPersonProfile, index: number) => {
          return (
            <Box key={index}>
              <ImageListItem key={item?.file_path} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item?.file_path}?w=248&fit=crop&auto=format`}
                  srcSet={`https://image.tmdb.org/t/p/original/${item?.file_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={'image'}
                  loading='lazy'
                />
              </ImageListItem>
            </Box>
          )
        })}
      </ImageList>
    </Box>
  )
}

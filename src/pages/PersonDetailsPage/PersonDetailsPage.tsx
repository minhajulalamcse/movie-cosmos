import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error, Loading, NoDataFound, PersonDetailsSection, PersonInformation } from '../../components'
import { useGetPersonDetailsQuery } from '../../services/tmdb'

export const PersonDetailsPage: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isLoading, isError } = useGetPersonDetailsQuery(Number(id))

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
    <Box position='relative'>
      <PersonInformation person={data} />
      <Container sx={{ m: '24px auto' }}>
        <PersonDetailsSection person={data} />
      </Container>
    </Box>
  )
}

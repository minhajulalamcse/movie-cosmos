import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { TrendingMovies, TrendingPeople, TrendingTVShows } from '../../components'

export const HomePage: FC = () => {
  return (
    <Box>
      <Container>
        <TrendingMovies />
      </Container>
      <Container>
        <TrendingTVShows />
      </Container>
      <Container>
        <TrendingPeople />
      </Container>
    </Box>
  )
}

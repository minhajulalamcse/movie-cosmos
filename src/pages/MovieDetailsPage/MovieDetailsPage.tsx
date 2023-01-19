import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { MovieDetailsFeaturedCard, MovieMediaSection, MovieRecommendations, TopCast } from '../../components'

export const MovieDetailsPage: FC = () => {
  return (
    <Box>
      <MovieDetailsFeaturedCard />
      <Container sx={{ m: '24px auto' }}>
        <TopCast />
      </Container>
      <Container sx={{ m: '24px auto' }}>
        <MovieMediaSection />
      </Container>
      <Container sx={{ m: '24px auto' }}>
        <MovieRecommendations />
      </Container>
    </Box>
  )
}

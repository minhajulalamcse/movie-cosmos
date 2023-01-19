import { Box } from '@mui/material'
import { FC } from 'react'
import { Container, MovieDetailsFeaturedCard, TopCast } from '../../components'

export const MovieDetailsPage: FC = () => {
  return (
    <Box>
      <MovieDetailsFeaturedCard />
      <Container>
        <TopCast />
      </Container>
    </Box>
  )
}

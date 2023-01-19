import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { MovieDetailsFeaturedCard, TopCast } from '../../components'

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

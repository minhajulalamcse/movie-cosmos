import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { PersonDetailsBiographySection } from '../../components'

export const PersonDetailsPage: FC = () => {
  return (
    <Box>
      <Container sx={{ m: '24px auto' }}>
        <PersonDetailsBiographySection />
      </Container>
    </Box>
  )
}

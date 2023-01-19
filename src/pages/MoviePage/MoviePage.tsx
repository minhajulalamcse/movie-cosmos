import { Container, Grid } from '@mui/material'
import { FC } from 'react'

export const MoviePage: FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          Filters
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2} md={3} lg={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

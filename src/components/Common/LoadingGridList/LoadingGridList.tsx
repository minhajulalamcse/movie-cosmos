import { Container, Grid } from '@mui/material'
import { FC } from 'react'
import { IMovieDetailsGetResponse } from '../../../interfaces/movies/IMovieDetailsGetResponse'
import { LoadingCard } from '../LoadingCard/LoadingCard'

export const LoadingGridList: FC = () => {
  return (
    <Container sx={{ margin: '24px auto' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          Filters
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3}>
            {Array.from(Array(20)).map((movie: IMovieDetailsGetResponse, index: number) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={index}>
                  <LoadingCard />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

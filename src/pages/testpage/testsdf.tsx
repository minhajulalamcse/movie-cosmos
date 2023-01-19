import { Container } from '@mui/material'
import React, { FC } from 'react'
import { TrendingMovies, TrendingPeople, TrendingTVShows } from '../../components'

export const HomePage: FC = () => {
  return (
    <React.Fragment>
      <Container sx={{ m: '24px auto' }}>
        <TrendingMovies />
      </Container>
      <Container sx={{ m: '24px auto' }}>
        <TrendingTVShows />
      </Container>
      <Container sx={{ m: '24px auto' }}>
        <TrendingPeople />
      </Container>
    </React.Fragment>
  )
}

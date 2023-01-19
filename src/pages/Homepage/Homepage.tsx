import { Container } from '@mui/material'
import React, { FC } from 'react'
import { TrendingMovies, TrendingPeople, TrendingTVShows } from '../../components'

export const HomePage: FC = () => {
  return (
    <React.Fragment>
      <Container>
        <TrendingMovies />
      </Container>
      <Container>
        <TrendingTVShows />
      </Container>
      <Container>
        <TrendingPeople />
      </Container>
    </React.Fragment>
  )
}

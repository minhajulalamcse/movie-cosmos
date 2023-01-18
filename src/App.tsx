import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { FC } from 'react'
import { AppbarWithDrawer, Container, TrendingMovies, TrendingPeople, TrendingTVShows } from './components'

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarWithDrawer />
      <Box component='main'>
        <Toolbar />
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
    </React.Fragment>
  )
}

export default App

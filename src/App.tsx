import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { FC } from 'react'
import { AppbarWithDrawer, Container, TrendingMovies, TrendingTVShows } from './components'

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
      </Box>
    </React.Fragment>
  )
}

export default App

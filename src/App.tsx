import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppbarWithDrawer, Container, TrendingMovies, TrendingPeople, TrendingTVShows } from './components'
import { Homepage, MovieDetailsPage } from './pages'

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarWithDrawer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
      </Routes>
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

import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppbarWithDrawer } from './components'
import { HomePage, MovieDetailsPage, MoviePage, PersonDetailsPage } from './pages'

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarWithDrawer />
      <Toolbar />
      <Box component='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviePage />} />
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
          <Route path='/person/:id' element={<PersonDetailsPage />} />
        </Routes>
      </Box>
    </React.Fragment>
  )
}

export default App

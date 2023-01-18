import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppbarWithDrawer } from './components'
import { Homepage, MovieDetailsPage } from './pages'

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarWithDrawer />
      <Toolbar />
      <Box component='main'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
        </Routes>
      </Box>
    </React.Fragment>
  )
}

export default App

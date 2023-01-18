import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { FC } from 'react'
import { AppbarWithDrawer, Container, TrendingMovie } from './components'

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarWithDrawer />
      <Box component='main'>
        <Toolbar />
        <Container>
          <TrendingMovie />
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default App

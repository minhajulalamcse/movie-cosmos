import { Box, CssBaseline, Toolbar } from '@mui/material'
import React, { FC } from 'react'
import { AppbarWithDrawer, CommonContainer, TrendingMovie } from './components'

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarWithDrawer />
      <Box component='main'>
        <Toolbar />
        <CommonContainer>
          <TrendingMovie />
        </CommonContainer>
      </Box>
    </React.Fragment>
  )
}

export default App

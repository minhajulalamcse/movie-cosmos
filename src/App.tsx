import { CssBaseline } from '@mui/material'
import React, { FC } from 'react'
import { AppbarWithDrawer } from './components'

const App: FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarWithDrawer />
    </React.Fragment>
  )
}

export default App

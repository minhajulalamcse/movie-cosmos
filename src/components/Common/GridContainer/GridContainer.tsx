import { Box, Grid } from '@mui/material'
import { FC } from 'react'

interface IGridContainer {
  children: React.ReactNode
}
export const GridContainer: FC<IGridContainer> = ({ children }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  )
}

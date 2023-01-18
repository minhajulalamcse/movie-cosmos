import { Box, Grid } from '@mui/material'
import { FC } from 'react'

interface ICommonGridContainer {
  children: React.ReactNode
}
export const CommonGridContainer: FC<ICommonGridContainer> = ({ children }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  )
}

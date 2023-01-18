import { Grid } from '@mui/material'
import { FC } from 'react'

interface IGridItem {
  children: React.ReactNode
}
export const GridItem: FC<IGridItem> = ({ children }) => {
  return (
    <Grid item xs={12} sm={4} md={3} lg={2} sx={{ margin: '0 auto' }}>
      {children}
    </Grid>
  )
}

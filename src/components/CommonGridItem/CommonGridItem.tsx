import { Grid } from '@mui/material'
import { FC } from 'react'

interface ICommonGridItem {
  children: React.ReactNode
}
export const CommonGridItem: FC<ICommonGridItem> = ({ children }) => {
  return (
    <Grid item xs={12} sm={4} md={3} lg={2} sx={{ margin: '0 auto' }}>
      {children}
    </Grid>
  )
}

import { Box, CircularProgress, Typography } from '@mui/material'
import { FC } from 'react'

export const Loading: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh'
      }}
    >
      <CircularProgress size='2rem' />
      <Typography variant='body1' mt={2} textAlign='center'>
        Loading...
      </Typography>
    </Box>
  )
}

import { Box, styled, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { NoDataFoundIllustration } from '../../../assets'

export const NoDataFound: FC = () => {
  const theme = useTheme()

  const Img = styled('img')(({ theme }) => ({
    height: '400px',
    width: 'auto',
    margin: '10px',
    transition: '0.3s all ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: '300px'
    }
  }))

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
      <Img alt='No Data Found' src={NoDataFoundIllustration} />
      <Typography variant='body1' textAlign='center' fontWeight={theme.typography.fontWeightMedium}>
        No data found
      </Typography>
    </Box>
  )
}

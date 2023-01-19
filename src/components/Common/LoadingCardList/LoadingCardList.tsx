import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { HorizontalSlider } from '../HorizontalSlider/HorizontalSlider'
import { LoadingCard } from '../LoadingCard/LoadingCard'

interface ILoadingCardList {
  title?: string
}
export const LoadingCardList: FC<ILoadingCardList> = ({ title }) => {
  const theme = useTheme()
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      justifyContent='flex-start'
      sx={{ m: '24px auto' }}
    >
      {title != null && (
        <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml='10px'>
          {title}
        </Typography>
      )}
      <HorizontalSlider>
        {Array.from(Array(20)).map((item: any, index: number) => {
          return <LoadingCard key={index} />
        })}
      </HorizontalSlider>
    </Box>
  )
}

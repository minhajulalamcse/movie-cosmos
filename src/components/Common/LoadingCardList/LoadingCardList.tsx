import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { HorizontalSlider } from '../HorizontalSlider/HorizontalSlider'
import { PlaceholderCard } from '../PlaceholderCard/PlaceholderCard'

interface ILoadingCardList {
  title?: string
}
export const LoadingCardList: FC<ILoadingCardList> = ({ title }) => {
  const theme = useTheme()
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start'>
      {title != null && (
        <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2} ml='10px'>
          {title}
        </Typography>
      )}
      <HorizontalSlider>
        {Array.from(Array(20)).map((item: any, index: number) => {
          return (
            <Box key={index} borderRadius={2} overflow='hidden' width='100%' height='413px'>
              <PlaceholderCard />
            </Box>
          )
        })}
      </HorizontalSlider>
    </Box>
  )
}

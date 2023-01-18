import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { BlackImage } from '../../../assets'
import { FullViewGlassEffect } from '../FullViewGlassEffect/FullViewGlassEffect'
import { GlassEffect } from '../GlassEffect/GlassEffect'
import { HorizontalSlider } from '../HorizontalSlider/HorizontalSlider'

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
            <Card key={index} sx={{ boxShadow: 2, borderRadius: 2, mb: 1 }}>
              <CardMedia
                sx={{ height: '300px', position: 'relative', overflow: 'hidden', opacity: 0.15 }}
                image={BlackImage}
                title={title}
              >
                <GlassEffect />
              </CardMedia>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column ',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start !important',
                  padding: '16px !important'
                }}
              >
                <Box
                  width='100%'
                  minHeight='36px'
                  mb='7px'
                  sx={{ position: 'relative', background: '#00000015', borderRadius: 1 }}
                >
                  <FullViewGlassEffect />
                </Box>
                <Box
                  width='100%'
                  minHeight='16px'
                  mb='2px'
                  sx={{ position: 'relative', background: '#00000015', borderRadius: 1 }}
                >
                  <FullViewGlassEffect />
                </Box>
                <Box
                  width='100%'
                  minHeight='18px'
                  mb='2px'
                  sx={{ position: 'relative', background: '#00000015', borderRadius: 1 }}
                >
                  <FullViewGlassEffect />
                </Box>
              </CardContent>
            </Card>
          )
        })}
      </HorizontalSlider>
    </Box>
  )
}

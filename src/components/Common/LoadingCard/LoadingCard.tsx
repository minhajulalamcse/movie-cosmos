import { Box, Card, CardContent, CardMedia } from '@mui/material'
import { FC } from 'react'
import { BlackImage } from '../../../assets'
import { FullViewGlassEffect } from '../FullViewGlassEffect/FullViewGlassEffect'
import { GlassEffect } from '../GlassEffect/GlassEffect'

export const LoadingCard: FC = () => {
  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2, mb: 1 }}>
      <CardMedia
        sx={{ height: '250px', position: 'relative', overflow: 'hidden', opacity: 0.15 }}
        image={BlackImage}
        title={'loading card black image'}
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
}

import { Collections as CollectionsIcon } from '@mui/icons-material'
import { Box, Grid, ImageListItem, Typography } from '@mui/material'
import { FC } from 'react'
import { IMovieBackdrop } from '../../interfaces/movies/IMovieBackdrop'
import { FullViewGlassEffect } from '../Common/FullViewGlassEffect/FullViewGlassEffect'

interface IMovieBackdropsTab {
  images: IMovieBackdrop[]
}

export const MovieBackdropsTab: FC<IMovieBackdropsTab> = ({ images }) => {
  if (images.length === 0) {
    return null
  }

  return (
    <Grid container spacing={3}>
      {images.slice(0, 5).map((item: IMovieBackdrop, index: number) => (
        <Grid item xs={12} sm={6} md={4} sx={{ margin: '0 auto' }} key={index}>
          <a
            href={`https://image.tmdb.org/t/p/original/${item?.file_path}?w=248&fit=crop&auto=format`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImageListItem key={item?.file_path} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.file_path}?w=248&fit=crop&auto=format`}
                srcSet={`https://image.tmdb.org/t/p/original/${item?.file_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={'image'}
                loading='lazy'
              />{' '}
            </ImageListItem>
          </a>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={4} sx={{ margin: '0 auto' }} key={6}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          height='100%'
          borderRadius={2}
          border='1px solid #cecece'
          position='relative'
          py={8}
          sx={{
            cursor: 'pointer',
            transition: '0.2s all ease-in-out',
            background: '#e6e6e6',
            '&:hover': {
              background: '#d8d8d8'
            }
          }}
        >
          <FullViewGlassEffect />
          <CollectionsIcon />
          <Typography variant='h6' ml={1}>
            All Backdrops
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

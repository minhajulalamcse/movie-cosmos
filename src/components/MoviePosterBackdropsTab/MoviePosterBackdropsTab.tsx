import { Box, ImageListItem } from '@mui/material'
import { FC } from 'react'
import { GridContainer, GridItem } from '..'
import { IMovieBackdrop } from '../../interfaces/movies/IMovieBackdrop'
import { IMoviePoster } from '../../interfaces/movies/IMoviePoster'

interface IMoviePosterBackdropsTab {
  images: IMovieBackdrop[] | IMoviePoster[]
  columnCount: number
  imageCount: number
}

export const MoviePosterBackdropsTab: FC<IMoviePosterBackdropsTab> = ({ images, columnCount, imageCount }) => {
  if (images.length === 0) {
    return null
  }

  return (
    <GridContainer>
      {images.slice(0, 11).map((item: IMovieBackdrop | IMoviePoster, index: number) => (
        <GridItem key={index}>
          <Box key={index}>
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
          </Box>
        </GridItem>
      ))}
    </GridContainer>
  )
}

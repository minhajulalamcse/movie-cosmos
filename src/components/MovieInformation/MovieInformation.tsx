import {
  ArrowBack as ArrowBackIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  Language as LanguageIcon,
  Movie as MovieIcon,
  WatchLater as WatchLaterIcon
} from '@mui/icons-material'
import { alpha, Box, Card, CardMedia, Container, IconButton, Rating, styled, Typography, useTheme } from '@mui/material'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import ShowMoreText from 'react-show-more-text'
import { BlackImage } from '../../assets'
import { IMovieDetailsGetResponse } from '../../interfaces/movies/IMovieDetailsGetResponse'
import { getFormattedDate, getYearFromDate, toHoursAndMinutes } from '../../utils'
import { GlassEffect } from '../Common/GlassEffect/GlassEffect'

interface IMovieInformation {
  movie: IMovieDetailsGetResponse
}
export const MovieInformation: FC<IMovieInformation> = ({ movie }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  console.log(movie)
  const TopSectionInfoWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: '32px',
    paddingBottom: '100px',
    color: alpha('#ffffff', 0.8),
    background: `linear-gradient(180deg,rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 100%
    )`,
    width: '100%'
  }))

  const BottomSectionInfoWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '32px',
    color: theme.palette.common.white,
    background: `linear-gradient(0,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 100%
    )`
  }))

  const OverviewText = styled(Typography)(({ theme }) => ({
    width: '100%',
    lineHeight: '20px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }))

  const handleBack = (): void => {
    navigate(-1)
  }

  const handleAddToWatchList = (): void => {}
  const handleFavorite = (): void => {}
  return (
    <React.Fragment>
      <TopSectionInfoWrapper>
        <Container>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <IconButton color='inherit' aria-label={'back'} size='medium' onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Box display='flex' gap='10px'>
              <IconButton
                color='inherit'
                aria-label={`${movie?.title} website`}
                size='medium'
                href={movie?.homepage != null ? movie?.homepage : '#'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LanguageIcon />
              </IconButton>
              <IconButton
                color='inherit'
                aria-label={`imdb ${movie?.title} page`}
                size='medium'
                href={movie?.imdb_id !== null ? `https://www.imdb.com/title/${movie?.imdb_id}` : '#'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <MovieIcon />
              </IconButton>
              <IconButton color='inherit' aria-label={'watch later'} size='medium' onClick={handleAddToWatchList}>
                <WatchLaterIcon />
              </IconButton>
              <IconButton color='inherit' aria-label={'favorite'} size='medium' onClick={handleFavorite}>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </TopSectionInfoWrapper>
      <BottomSectionInfoWrapper>
        <Container sx={{ px: { xs: 0, md: 2 } }}>
          <Box display='flex' justifyContent='flex-start' alignItems='flex-end'>
            <Card
              sx={{
                width: '400px',
                height: '450px',
                boxShadow: 3,
                borderRadius: 2,
                position: 'relative',
                display: { xs: 'none', md: 'block' }
              }}
            >
              <CardMedia
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#000'
                }}
                image={
                  movie?.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : BlackImage
                }
                title={movie?.title}
              >
                <GlassEffect />
              </CardMedia>
            </Card>
            <Box
              ml={{ xs: 0, md: 2 }}
              display='flex'
              flexDirection='column'
              justifyContent='flex-end'
              alignItems='flex-start'
              width='100%'
            >
              <Typography variant='h4' fontWeight={theme.typography.fontWeightBold} color='inherit'>
                {movie?.title}{' '}
                <Typography
                  variant='h4'
                  fontWeight={theme.typography.fontWeightRegular}
                  color={alpha('#ffffff', 0.8)}
                  display='inline-block'
                >
                  ({getYearFromDate(movie?.release_date)})
                </Typography>
              </Typography>
              <Box display='flex' alignItems='center' gap='10px' mt={1}>
                <Typography color='inherit' fontWeight={theme.typography.fontWeightMedium}>
                  {getFormattedDate(movie?.release_date)}
                </Typography>
                &bull;
                <Typography color='inherit' fontWeight={theme.typography.fontWeightMedium}>
                  {toHoursAndMinutes(movie?.runtime)}
                </Typography>
              </Box>
              <Typography
                variant='subtitle1'
                fontWeight={theme.typography.fontWeightRegular}
                fontStyle='italic'
                gutterBottom
                color={alpha('#ffffff', 0.9)}
              >
                {movie?.tagline}
              </Typography>
              <Typography variant='h6' fontWeight={theme.typography.fontWeightMedium} gutterBottom color='inherit'>
                Overview
              </Typography>
              <OverviewText
                variant='body2'
                fontWeight={theme.typography.fontWeightMedium}
                letterSpacing={0.5}
                color={alpha('#ffffff', 0.8)}
              >
                <ShowMoreText
                  lines={1}
                  more='Show more'
                  less='Show less'
                  className='content-css'
                  anchorClass='show-more-less-clickable'
                  expanded={false}
                  truncatedEndingComponent={'... '}
                >
                  {movie?.overview}
                </ShowMoreText>
              </OverviewText>
              <Box
                display='flex'
                alignItems='flex-start'
                justifyContent='space-between'
                color={alpha('#ffffff', 0.8)}
                mt={1}
                sx={{ flexDirection: { xs: 'column', md: 'row' } }}
              >
                <Box mt={1}>
                  <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'>
                    <Box display='flex' alignItems='center' gap={'10px'}>
                      <Rating
                        size='small'
                        readOnly
                        value={movie.vote_average / 2}
                        precision={0.1}
                        sx={{
                          '.MuiRating-icon.MuiRating-iconEmpty': {
                            color: '#ffffff50'
                          }
                        }}
                      />
                      <Typography color='inherit' variant='body2' fontWeight={theme.typography.fontWeightMedium}>
                        {(movie?.vote_average).toPrecision(2)} / 10
                      </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' gap={'10px'}>
                      <Typography color='inherit' variant='body2' fontWeight={theme.typography.fontWeightMedium}>
                        {movie?.vote_count} reviews
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        {/* <MovieGenreList genres={movie?.genres} /> */}
      </BottomSectionInfoWrapper>
    </React.Fragment>
  )
}

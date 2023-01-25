/* eslint-disable @typescript-eslint/naming-convention */
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { NoDataFoundIllustration } from '../../assets'
import {
  CardWithGlassEffect,
  Error,
  Filters,
  NoDataFound
} from '../../components'
import { LoadingGridList } from '../../components/Common/LoadingGridList/LoadingGridList'
import { IMovieDetailsGetResponse } from '../../interfaces/movies/IMovieDetailsGetResponse'
import { useGetMoviesQuery } from '../../services/tmdb'
import { theme } from '../../theme'

export const MoviePage: FC = () => {
  const { categoryName, genreName: with_genres } = useSelector(
    (state: RootState) => state?.movie
  )

  const { data, isLoading, isError } = useGetMoviesQuery({
    categoryName,
    with_genres
  })

  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <LoadingGridList />
  }
  if (data === null || data === undefined) {
    return <NoDataFound />
  }

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
    <Container sx={{ margin: '24px auto' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <Filters />
        </Grid>
        <Grid item xs={12} lg={9} mt={3.5}>
          <Grid container spacing={3}>
            {data?.results.length === 0 && (
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Img alt='No Data Found' src={NoDataFoundIllustration} />
                  <Typography
                    variant='body1'
                    textAlign='center'
                    fontWeight={theme.typography.fontWeightMedium}
                  >
                    No data found
                  </Typography>
                </Box>
              </Grid>
            )}
            {data?.results.map(
              (movie: IMovieDetailsGetResponse, index: number) => {
                return (
                  <Grid item xs={12} sm={4} md={3} key={index}>
                    <CardWithGlassEffect
                      imagePath={movie?.poster_path}
                      link={`/movie/${movie.id}`}
                      glassEffect={true}
                      title={movie?.title}
                      voteAverage={movie?.vote_average}
                      subTitle={movie?.release_date}
                    />
                  </Grid>
                )
              }
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

import { Container, Grid } from '@mui/material'
import { FC } from 'react'
import { CardWithGlassEffect, Error, Loading, NoDataFound } from '../../components'
import { IMovieDetailsGetResponse } from '../../interfaces/movies/IMovieDetailsGetResponse'
import { useGetPopularMoviesQuery } from '../../services/tmdb'

export const MoviePage: FC = () => {
  const { data, isLoading, isError } = useGetPopularMoviesQuery(null)

  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }
  if (data === null || data === undefined) {
    return <NoDataFound />
  }
  return (
    <Container sx={{ margin: '24px auto' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          Filters
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3}>
            {data?.results.map((movie: IMovieDetailsGetResponse, index: number) => {
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
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

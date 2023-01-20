import { Grid } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error, Loading, NoDataFound } from '..'
import { IPersonCast } from '../../interfaces/people/IPersonMovieCast'
import { useGetPersonMovieCreditsQuery } from '../../services/tmdb'
import { CardWithGlassEffect } from '../Common/CardWithGlassEffect/CardWithGlassEffect'

export const PersonMovies: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isLoading, isError } = useGetPersonMovieCreditsQuery(Number(id))

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
    <Grid container spacing={3}>
      {data?.cast.map((movie: IPersonCast, index: number) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
  )
}

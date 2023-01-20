import { Grid } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error, Loading, NoDataFound } from '..'
import { IPersonTVCast } from '../../interfaces/people/IPersonTVCast'
import { useGetPersonTVCreditsQuery } from '../../services/tmdb'
import { CardWithGlassEffect } from '../Common/CardWithGlassEffect/CardWithGlassEffect'

export const PersonTVShows: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isLoading, isError } = useGetPersonTVCreditsQuery(Number(id))

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
      {data?.cast.map((tvShow: IPersonTVCast, index: number) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardWithGlassEffect
              imagePath={tvShow?.poster_path}
              link={`/tv/${tvShow.id}`}
              glassEffect={true}
              title={tvShow?.name}
              voteAverage={tvShow?.vote_average}
              subTitle={tvShow?.first_air_date}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

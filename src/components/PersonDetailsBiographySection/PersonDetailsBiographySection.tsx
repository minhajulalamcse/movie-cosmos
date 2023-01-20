import { Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error, FullViewGlassEffect, Loading, NoDataFound } from '..'
import { BlackImage } from '../../assets'
import { useGetPersonDetailsQuery } from '../../services/tmdb'

export const PersonDetailsBiographySection: FC = () => {
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }

  const { data, isLoading, isError } = useGetPersonDetailsQuery(Number(id))

  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }
  if (data === null || data === undefined) {
    return <NoDataFound />
  }

  console.log(data)
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
            <CardMedia
              sx={{ height: '450px', position: 'relative' }}
              image={data?.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${data?.profile_path}` : BlackImage}
              title={data?.name}
            >
              <FullViewGlassEffect />
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <Typography variant='h3' gutterBottom>
              {data?.name}
            </Typography>
            <Typography variant='body1' fontWeight={theme.typography.fontWeightMedium} gutterBottom>
              Biography
            </Typography>
            <Typography variant='body1'>{data?.biography}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

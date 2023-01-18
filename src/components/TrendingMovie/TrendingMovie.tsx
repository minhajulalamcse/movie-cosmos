import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { ITrendingResultObject } from '../../interfaces/trending/ITrendingResultObject'
import { MediaType } from '../../interfaces/trending/MediaType'
import { useGetTrendingQuery } from '../../services/tmdb'
import { CommonCard } from '../CommonCard/CommonCard'
import { CommonGridContainer } from '../CommonGridContainer/CommonGridContainer'
import { CommonGridItem } from '../CommonGridItem/CommonGridItem'

export const TrendingMovie: FC = () => {
  const theme = useTheme()
  const mediaType = MediaType.movie
  const { trendingMovieTimeWindow: timeWindow } = useSelector((state: RootState) => state.trending)
  const { data } = useGetTrendingQuery({ mediaType, timeWindow })

  return (
    <Box>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} mb={2}>
        Trending
      </Typography>
      <CommonGridContainer>
        {data?.results.map((movie: ITrendingResultObject, index: number) => {
          return (
            <CommonGridItem key={index}>
              <CommonCard
                releaseDate={movie?.release_date}
                title={movie?.title}
                posterPath={movie?.poster_path}
                voteAverage={movie?.vote_average}
                link={`/movie${movie?.id}`}
              />
            </CommonGridItem>
          )
        })}
      </CommonGridContainer>
    </Box>
  )
}

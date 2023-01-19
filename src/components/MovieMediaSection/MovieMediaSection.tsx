import { Box, Tab, Tabs, Typography, useTheme } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error, Loading, MoviePosterBackdropsTab } from '..'
import { useGetMovieImagesQuery } from '../../services/tmdb'
import { NoDataFound } from '../Common/NoDataFound/NoDataFound'

interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel: FC<ITabPanelProps> = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ marginTop: '24px' }}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  )
}

export const MovieMediaSection: FC = () => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  if ((typeof id === 'string' && Number.isNaN(parseInt(id))) || id === undefined) {
    navigate('/')
  }
  const { data, isLoading, isError } = useGetMovieImagesQuery(Number(id))
  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }
  if (data === null || data === undefined || (data?.backdrops.length === 0 && data?.posters.length === 0)) {
    return <NoDataFound />
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-start' my={2} mr={0}>
      <Typography variant='h5' fontWeight={theme.typography.fontWeightMedium} ml='10px'>
        Media
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable tabs'
      >
        <Tab label='Posters' />
        <Tab label='Backdrops' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MoviePosterBackdropsTab images={data?.posters} columnCount={5} imageCount={9}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MoviePosterBackdropsTab images={data?.backdrops} columnCount={3} imageCount={8}/>
      </TabPanel>
    </Box>
  )
}

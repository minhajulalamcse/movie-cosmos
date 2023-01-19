import { Box, Tab, Tabs } from '@mui/material'
import { FC, useState } from 'react'
import { MovieVideos } from '../MovieVideos/MovieVideos'

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

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <Box m={2}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable tabs'
      >
        <Tab label='Videos' />
        <Tab label='Posters' />
        <Tab label='Backdrops' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MovieVideos />
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
      </TabPanel>
    </Box>
  )
}

import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { FC } from 'react'
import { IPersonDetailsGetResponse } from '../../interfaces/people/IPersonDetailsGetResponse'

interface IPersonDetails {
  person: IPersonDetailsGetResponse
}

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

export const PersonDetails: FC<IPersonDetails> = ({ person }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <Box p={3} pt={0} pl={{ xs: 0, lg: 3 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        <Tab label='Biography' />
        <Tab label='Movies' />
        <Tab label='TV Seris' />
        <Tab label='Photos' />
      </Tabs>
      <TabPanel value={value} index={0}>
        {person?.biography !== null && <Typography>{person?.biography}</Typography>}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <PersonMovies /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <PersonTVSeries /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* <PersonPhotos /> */}
      </TabPanel>
    </Box>
  )
}
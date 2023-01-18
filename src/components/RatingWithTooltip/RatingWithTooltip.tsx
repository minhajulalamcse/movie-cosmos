import { Box, Rating, Tooltip } from '@mui/material'
import { FC } from 'react'

interface IRatingWithTooltip {
  voteAverage: number
}

export const RatingWithTooltip: FC<IRatingWithTooltip> = ({ voteAverage }) => {
  return (
    <Tooltip
      placement='right'
      title={`${voteAverage} / 10`}
      arrow
      sx={{ display: 'flex', justifyContent: 'flex-start' }}
    >
      <Box>
        <Rating size='small' readOnly value={voteAverage / 2} precision={0.1} />
      </Box>
    </Tooltip>
  )
}

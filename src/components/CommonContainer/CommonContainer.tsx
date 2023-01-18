import { Box } from '@mui/material'
import { FC } from 'react'
import { maxWidth } from '../../utils/constants'

interface ICommonContainer {
  children: React.ReactNode
}
export const CommonContainer: FC<ICommonContainer> = ({ children }) => {
  return (
    <Box maxWidth={`${maxWidth}px`} width='100%' margin='24px auto'>
      {children}
    </Box>
  )
}

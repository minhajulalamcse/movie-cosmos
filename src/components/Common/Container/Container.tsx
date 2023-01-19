import { Box } from '@mui/material'
import { FC } from 'react'
import { maxWidth } from '../../../utils/constants'

interface IContainer {
  children: React.ReactNode
}
export const Container: FC<IContainer> = ({ children }) => {
  return (
    <Box maxWidth={`${maxWidth}px`} width='100%' margin='0 auto' height='100%' position='relative'>
      {children}
    </Box>
  )
}

import { Box, keyframes, styled } from '@mui/material'
import { FC } from 'react'

export const FullViewGlassEffect: FC = () => {
  const move2 = keyframes`
  from { 
    transform: translate(-400px, 0px); 
  }
  to { 
    transform: translate(600px, 0px) ; 
    }
`
  const GlassWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    borderRadius: '4px'
  }))
  const Glass = styled(Box)(({ theme }) => ({
    transform: 'rotate(20deg)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: '16px'
  }))
  const GlassShadowAnimation = styled(Box)(({ theme }) => ({
    background: `linear-gradient(0,rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 90%
    )`,
    animation: `${move2} 10s infinite`,
    borderRight: '1px solid rgba(255, 255, 255, 0.4)',
    width: '50px',
    position: 'absolute',
    top: -100,
    left: 0,
    bottom: -100,
    right: 0
  }))
  return (
    <GlassWrapper>
      <Glass>
        <GlassShadowAnimation />
      </Glass>
    </GlassWrapper>
  )
}

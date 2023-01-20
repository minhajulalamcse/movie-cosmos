import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Box, Card, CardMedia, Container, IconButton, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IPersonDetailsGetResponse } from '../../interfaces/people/IPersonDetailsGetResponse'

interface IPersonInformation {
  person: IPersonDetailsGetResponse
}
export const PersonInformation: FC<IPersonInformation> = ({ person }) => {
  const theme = useTheme()
  const navigate = useNavigate()

  const handleBack = (): void => {
    navigate(-1)
  }

  const getAllNames = (names: string[]): string => {
    if (names.length === 0) {
      return ''
    }
    if (names.length === 1) {
      return `Also known as: ${names[0]}`
    }
    return `Also known as: ${names.join(', ')}`
  }

  return (
    <Container
      sx={{
        m: '24px auto',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'flex-start'
      }}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={5}>
        <IconButton color='inherit' aria-label={'back'} size='medium' onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Card
        sx={{
          width: '300px',
          height: '300px',
          background: '#000'
        }}
      >
        <CardMedia
          sx={{
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          image={person?.profile_path !== null ? `https://image.tmdb.org/t/p/original/${person?.profile_path}` : ''}
          title={person.name}
        />
      </Card>
      <Box mt={2} display='flex' flexDirection='column' justifyContent='center' flexBasis='calc(100% - 200px)'>
        <Typography variant='h4' fontWeight={theme.typography.fontWeightBold} color='inherit' sx={{ width: '100%' }}>
          {person?.name}
        </Typography>
        <Typography fontWeight={theme.typography.fontWeightMedium}>{getAllNames(person?.also_known_as)}</Typography>
      </Box>
    </Container>
  )
}

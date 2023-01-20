import { Language as LanguageIcon, Movie as MovieIcon } from '@mui/icons-material'
import { Box, IconButton, styled, Typography } from '@mui/material'
import React, { FC } from 'react'
import { IPersonDetailsGetResponse } from '../../interfaces/people/IPersonDetailsGetResponse'
import { getAgeFromBirthDate, getFormattedDate, getGenderInTextForm } from '../../utils'

interface IPersonDetailsSidebar {
  person: IPersonDetailsGetResponse
}

export const PersonDetailsSidebar: FC<IPersonDetailsSidebar> = ({ person }) => {
  const Heading = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightMedium,
    paddingLeft: '8px'
  }))

  const Info = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightMedium,
    paddingLeft: '8px',
    paddingRight: '8px'
  }))
  const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'row'
    }
  }))
  const ItemWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '16px',
    borderLeft: '4px solid #e6e6e6',
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px',
    [theme.breakpoints.down('lg')]: {
      flexBasis: '33%'
    },
    [theme.breakpoints.down('md')]: {
      flexBasis: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%'
    }
  }))
  return (
    <Wrapper>
      {person?.gender !== null && (
        <ItemWrapper>
          <Heading variant='caption'>Gender</Heading>
          <Info variant='subtitle1'>{getGenderInTextForm(person.gender)}</Info>
        </ItemWrapper>
      )}
      {person?.popularity !== null && (
        <ItemWrapper>
          <Heading variant='caption'>Popularity</Heading>
          <Info variant='subtitle1'>{(person?.popularity).toFixed(2)}</Info>
        </ItemWrapper>
      )}
      {person?.birthday !== null && (
        <React.Fragment>
          <ItemWrapper>
            <Heading variant='caption'>Birthday</Heading>
            <Info variant='subtitle1'>{getFormattedDate(person?.birthday)}</Info>
          </ItemWrapper>
          <ItemWrapper>
            <Heading variant='caption'>Age</Heading>
            <Info variant='subtitle1'>{getAgeFromBirthDate(person?.birthday)}</Info>
          </ItemWrapper>
        </React.Fragment>
      )}
      {person?.deathday !== null && (
        <React.Fragment>
          <ItemWrapper>
            <Heading variant='caption'>Deathday</Heading>
            <Info variant='subtitle1'>{getFormattedDate(person?.deathday)}</Info>
          </ItemWrapper>
          <ItemWrapper>
            <Heading variant='caption'>At the age of</Heading>
            <Info variant='subtitle1'>{getAgeFromBirthDate(person?.deathday)}</Info>
          </ItemWrapper>
        </React.Fragment>
      )}
      {person?.place_of_birth !== null && (
        <ItemWrapper>
          <Heading variant='caption'>Place of birth</Heading>
          <Info variant='subtitle1'>{person?.place_of_birth}</Info>
        </ItemWrapper>
      )}

      {(person?.homepage !== null || person?.imdb_id !== null) && (
        <ItemWrapper>
          <Heading variant='caption'>Official site</Heading>
          <Box display='flex' gap='10px'>
            {person?.homepage !== null && (
              <IconButton
                color='inherit'
                aria-label={`${person?.homepage} website`}
                size='medium'
                href={person?.homepage}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LanguageIcon />
              </IconButton>
            )}
            {person?.imdb_id !== null && (
              <IconButton
                color='inherit'
                aria-label={`imdb ${person?.imdb_id} page`}
                size='medium'
                href={`https://www.imdb.com/name/${person?.imdb_id}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <MovieIcon />
              </IconButton>
            )}
          </Box>
        </ItemWrapper>
      )}
    </Wrapper>
  )
}

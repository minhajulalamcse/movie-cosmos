import { Grid } from '@mui/material'
import { FC } from 'react'
import { PersonDetails, PersonDetailsSidebar } from '..'
import { IPersonDetailsGetResponse } from '../../interfaces/people/IPersonDetailsGetResponse'

interface IPersonDetailsSection {
  person: IPersonDetailsGetResponse
}
export const PersonDetailsSection: FC<IPersonDetailsSection> = ({ person }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        lg={3}
        mt={{ xs: 0, lg: 9 }}
        sx={{ borderRight: { xs: '0px solid #e6e6e6', lg: '1px solid #e6e6e6' } }}
      >
        <PersonDetailsSidebar person={person} />
      </Grid>
      <Grid item xs={12} lg={9}>
        <PersonDetails person={person} />
      </Grid>
    </Grid>
  )
}

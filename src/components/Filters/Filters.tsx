import { Box, Button, List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { saveCategoryName, saveGenreName } from '../../features/movieSlice'
import { IGenre } from '../../interfaces/genres/IGenre'
import { useGetGenresQuery } from '../../services/tmdb'

interface ICategory {
  label: string
  value: string
}

const categories: ICategory[] = [
  {
    label: 'Popular',
    value: 'popular'
  },
  {
    label: 'Upcoming',
    value: 'upcoming'
  },
  {
    label: 'Top Rated',
    value: 'top_rated'
  },
  {
    label: 'Now Playing',
    value: 'now_playing'
  }
]
export const Filters: FC = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const { data: genres } = useGetGenresQuery(null)

  const handleCategorySelection = (value: string): void => {
    dispatch(saveCategoryName(value))
  }

  const handleGenreSelection = (value: number): void => {
    dispatch(saveGenreName(value.toString()))
  }
  return (
    <Box>
      <Box mb={3}>
        <Typography
          mb={1}
          ml={1}
          variant='body2'
          color={theme.palette.text.secondary}
          fontWeight={theme.typography.fontWeightMedium}
        >
          Categories
        </Typography>
        <Box borderRadius={2} boxShadow={1} sx={{ border: '1px solid #e6e6e6' }}>
          <List>
            {categories?.map((category: ICategory, index: number) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  onClick={() => {
                    handleCategorySelection(category.value)
                  }}
                >
                  <ListItemText primary={`${category.label}`} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {genres !== null && genres?.genres.length !== 0 ? (
        <Box mb={3}>
          <Typography
            mb={1}
            ml={1}
            variant='body2'
            color={theme.palette.text.secondary}
            fontWeight={theme.typography.fontWeightMedium}
          >
            Genres
          </Typography>
          <Box borderRadius={2} boxShadow={1} p={2} sx={{ border: '1px solid #e6e6e6' }}>
            <Box display='flex' gap='12px' flexWrap='wrap'>
              {genres?.genres.map((genre: IGenre, index: number) => (
                <Button
                  size='small'
                  variant='outlined'
                  key={index}
                  sx={{ borderRadius: '9999px' }}
                  onClick={() => {
                    handleGenreSelection(genre?.id)
                  }}
                >
                  {genre.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}

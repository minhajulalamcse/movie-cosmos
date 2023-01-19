import { Box, List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { saveCategoryName } from '../../features/movieSlice'

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
  const handleCategorySelection = (value: string): void => {
    dispatch(saveCategoryName(value))
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
    </Box>
  )
}

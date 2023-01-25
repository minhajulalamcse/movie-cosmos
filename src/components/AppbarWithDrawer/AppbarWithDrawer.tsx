import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useColorModeContext } from '../../context/ToggleColorMode'

interface INavItem {
  label: string
  route: string
}

const drawerWidth = 240
const navItems: INavItem[] = [
  {
    label: 'Movies',
    route: '/movies'
  }
  // {
  //   label: 'TV Shows',
  //   route: '/tv'
  // },
  // {
  //   label: 'People',
  //   route: '/people'
  // }
]

export const AppbarWithDrawer: React.FC = () => {
  const navigate = useNavigate()
  const { mode, toggleMode } = useColorModeContext()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleLogoClick = (): void => {
    navigate('/')
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography
        variant='h6'
        sx={{ my: 2, cursor: 'pointer' }}
        onClick={handleLogoClick}
      >
        Movie Cosmos
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: INavItem, index: number) => (
          <ListItem
            key={index}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`${item?.route}`}>
                <ListItemText primary={item.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box>
      <CssBaseline />
      <AppBar component='nav'>
        <Container sx={{ padding: '0 !important' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{
                cursor: 'pointer',
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' }
              }}
              onClick={handleLogoClick}
            >
              Movie Cosmos
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item: INavItem, index: number) => (
                <Link
                  to={`${item?.route}`}
                  key={index}
                >
                  <Button sx={{ color: '#fff' }}>{item?.label}</Button>
                </Link>
              ))}
            </Box>
            <IconButton
              sx={{
                color: '#fff',
                ml: 'auto',
                padding: '0 !important'
              }}
              onClick={() => toggleMode()}
            >
              {mode === 'dark' ? (
                <Brightness7Icon sx={{ color: '#fff', mr: 0.5 }} />
              ) : (
                <Brightness4Icon sx={{ color: '#fff', mr: 0.5 }} />
              )}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

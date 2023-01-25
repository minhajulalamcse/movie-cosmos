import { createTheme, ThemeProvider } from '@mui/material'
import { createContext, FC, useContext, useMemo, useState } from 'react'
interface ColorModeContextValues {
  mode: string
  toggleMode: Function
}
const ColorModeContext = createContext<ColorModeContextValues>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as ColorModeContextValues
)

interface IToggleColorModeProvider {
  children: React.ReactNode
}
export const ToggleColorModeProvider: FC<IToggleColorModeProvider> = ({
  children
}) => {
  const [mode, setMode] = useState<any>('light')
  const toggleMode = (): void => {
    setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#13315c',
            light: '#134074',
            dark: '#0b2545',
            contrastText: '#ffffff'
          },
          secondary: {
            main: '#f6c71a',
            light: '#fed230',
            dark: '#d9ab00',
            contrastText: '#000000'
          }
        },
        typography: {
          fontFamily: "'Inter',sans-serif"
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useColorModeContext = () => useContext(ColorModeContext)

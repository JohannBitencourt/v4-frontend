import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './auth'

import { useTheme } from './theme'
import { ModalProvider } from './modal'
import { ToolsProvider } from './tools'

const AppProvider: React.FC = ({ children }) => {
  const { theme } = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToolsProvider>
          <ModalProvider>{children}</ModalProvider>
        </ToolsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default AppProvider

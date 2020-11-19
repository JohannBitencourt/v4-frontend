import React from 'react'
import AppProvider from './context'

import { ThemeProvider } from './context/theme'

import GlobalStyle from './styles/global'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App

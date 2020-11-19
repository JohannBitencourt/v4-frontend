import React from 'react'
import AppProvider from './context'

import { ThemeProvider } from './context/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStyle from './styles/global'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App

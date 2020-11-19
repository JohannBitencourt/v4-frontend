import React from 'react'
import { useAuth } from '../context/auth'

import SignRoutes from './sign.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const { signed } = useAuth()

  return signed ? <AppRoutes /> : <SignRoutes />
}

export default Routes

import React, { useState, useEffect } from 'react'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'
import { Container } from '../styles/button-theme.style'
import { useTheme } from '../context/theme'

const ButtonTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  const [icon, setIcon] = useState(<RiSunFill />)

  useEffect(() => {
    setIcon(theme.title === 'light' ? <RiMoonClearFill /> : <RiSunFill />)
  }, [theme.title])

  return (
    <Container type="button" onClick={toggleTheme}>
      {icon}
    </Container>
  )
}

export default ButtonTheme

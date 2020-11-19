import React, { useState } from 'react'
import { Form } from '@unform/web'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { useAuth } from '../context/auth'
import { Container } from '../styles/auth.style'

const Login: React.FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    try {
      await login({ email: email, password: password })
      toast.success('Logado com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error('Erro ao efetuar login')
    }
  }

  return (
    <>
      <Container>
        <img
          src={
            'https://v4company.com/wp-content/uploads/2016/02/Logo_1000px_1.png'
          }
          alt="logo"
        />
        <Form onSubmit={handleLogin}>
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Access</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={30} color="#E02041" />
            Register
          </Link>
        </Form>
      </Container>
    </>
  )
}

export default Login

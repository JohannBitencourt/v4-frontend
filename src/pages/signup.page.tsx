import React, { useState } from 'react'
import { Form } from '@unform/web'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { useAuth } from '../context/auth'
import { Container } from '../styles/auth.style'

const Signup: React.FC = () => {
  const { signup } = useAuth()
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignup() {
    try {
      await signup({
        name: name,
        email: email,
        password: password
      })

      history.push('/')
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <>
      <Container>
        <h1>Create account</h1>
        <Form onSubmit={handleSignup}>
          <input
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

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

          <button type="submit">Register</button>

          <Link className="back-link" to="/">
            <FiLogIn size={30} color="#E02041" />
            Sign in
          </Link>
        </Form>
      </Container>
    </>
  )
}

export default Signup

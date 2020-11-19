import React, { useState } from 'react'
import { Form } from '@unform/web'
import { FiPlus, FiSearch, FiLogOut } from 'react-icons/fi'

import { useModal } from '../context/modal'
import { useTools } from '../context/tools'
import { useAuth } from '../context/auth'

import ButtonTheme from './button-theme.component'
import Input from './input.component'
import Button from './button.component'

import { Container } from '../styles/header.style'

interface SearchData {
  search: string
}

const Header: React.FC = () => {
  const { logout } = useAuth()
  const { isOpenAdd } = useModal()
  const { handleSearchSubmit, handleSearchSubmitByTag } = useTools()
  const [onlyTag, setOnlyTag] = useState(false)

  async function handleSubmit(data: SearchData) {
    console.log('antes ', onlyTag)
    if (onlyTag) {
      await handleSearchSubmitByTag(data)
    } else {
      await handleSearchSubmit(data)
    }
  }

  return (
    <Container>
      <div className="title">
        <h1>VUTTR</h1>
        <h2>(Very Useful Tools to Remember)</h2>
      </div>
      <div className="bottom-content">
        <div>
          <Form onSubmit={handleSubmit}>
            <Input name="search" sizeType="search" placeholder="Search" />

            <Button variant="search" size="large" type="submit">
              <FiSearch size={25} />
            </Button>

            <input
              id="check"
              name="checkbox"
              type="checkbox"
              checked={onlyTag}
              onChange={() => setOnlyTag(!onlyTag)}
            />
            <label htmlFor="check">Search in tags only</label>
          </Form>
        </div>

        <Button variant="add" size="large" onClick={() => isOpenAdd()}>
          <div>
            <FiPlus size={25} />
            Add
          </div>
        </Button>
        <ButtonTheme />
        <Button variant="logout" size="large" onClick={() => logout()}>
          <FiLogOut size={25} />
        </Button>
      </div>
    </Container>
  )
}

export default Header

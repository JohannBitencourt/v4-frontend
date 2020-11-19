/* eslint-disable multiline-ternary */
import React, { useEffect, useCallback } from 'react'
import { Form } from '@unform/web'
import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'

import { useModal } from '../context/modal'
import { useTools } from '../context/tools'

import Modal from '../components/modal.component'
import Input from '../components/input.component'
import Button from '../components/button.component'
import Header from '../components/header.component'
import Card from '../components/card.component'

import colors from '../styles/colors'
import { Container, SectionTools } from '../styles/home-page.style'

interface AddToolFormData {
  title: string
  description: string
  link: string
  tags: string
}

const Dashboard: React.FC = () => {
  const { isOpenAdd, isOpenRemove, cardId } = useModal()
  const {
    tools,
    loading,
    loadTools,
    removeTool,
    handleAddToolSubmit
  } = useTools()

  useEffect(() => {
    loadTools()
  }, [loadTools])

  async function handleSubmit(data: AddToolFormData) {
    try {
      await handleAddToolSubmit(data)
      isOpenAdd()
      toast.success('Ferramenta criada com sucesso!')
    } catch (error) {
      toast.error(
        'Erro ao adicionar nova ferramenta, verifique se ela já existe'
      )
      console.log(error)
    }
  }

  const CallRemoveTool = useCallback(
    id => {
      removeTool(id)
      isOpenRemove()
    },
    [isOpenRemove, removeTool]
  )

  return (
    <Container>
      <Modal title="Remove tool" type="remove">
        <p>Are you sure you want to remove this tool?</p>
        <div>
          <Button
            variant="cancel"
            size="regular"
            onClick={() => isOpenRemove()}
          >
            <div>Cancel</div>
          </Button>
          <Button
            variant="remove"
            size="regular"
            onClick={() => CallRemoveTool(cardId)}
          >
            <div>Remove</div>
          </Button>
        </div>
      </Modal>
      <Modal title="Add new tool" type="add">
        <Form onSubmit={handleSubmit}>
          <p>Tool Name</p>
          <Input name="title" sizeType="form" required />

          <p>Tool Link</p>
          <Input name="link" sizeType="form" required />

          <p>Tool description</p>
          <Input name="description" sizeType="form" isTextArea required />

          <p>
            Tags
            <span>(separate with spaces)</span>
          </p>
          <Input name="tags" sizeType="form" required />

          <div>
            <Button variant="addTool" size="regular" type="submit">
              <div>Add</div>
            </Button>
          </div>
        </Form>
      </Modal>
      <Header />

      <SectionTools>
        {loading ? (
          <ReactLoading type="spin" color={colors.red} width={30} />
        ) : (
          tools.map(tool => (
            <Card
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              link={tool.link}
              tags={tool.tags}
            />
          ))
        )}
      </SectionTools>
    </Container>
  )
}

export default Dashboard

import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useModal } from '../context/modal'

import { Container, Content } from '../styles/card.style'

interface CardProps {
  id: string
  title: string
  link: string
  description: string
  tags: string[]
}

const Card: React.FC<CardProps> = ({ id, title, link, description, tags }) => {
  const { isOpenRemove } = useModal()

  return (
    <Container>
      <Content>
        <a href={link}>{title}</a>
        <p>{description}</p>
        <div>
          {tags.map(tag => (
            <strong key={tag}>{`#${tag}`}</strong>
          ))}
        </div>
      </Content>
      <button type="button" onClick={() => isOpenRemove(id)}>
        <MdDelete size={25} />
      </button>
    </Container>
  )
}

export default Card

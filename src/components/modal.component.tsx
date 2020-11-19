import React from 'react'
import { CgClose } from 'react-icons/cg'
import colors from '../styles/colors'

import { Container, Content } from '../styles/modal.style'
import { useTheme } from '../context/theme'
import { useModal } from '../context/modal'

interface ModalProps {
  title: string
  type: 'add' | 'remove'
}

const Modal: React.FC<ModalProps> = ({ children, title, type }) => {
  const { theme } = useTheme()
  const {
    isOpenAdd,
    isOpenRemove,
    modalAddIsOpen,
    modalRemoveIsOpen
  } = useModal()

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  return (
    <>
      <Container
        isOpen={type === 'add' ? modalAddIsOpen : modalRemoveIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => (modalAddIsOpen ? isOpenAdd() : isOpenRemove())}
        style={{
          overlay: {
            backgroundColor:
              theme.title === 'light'
                ? 'rgba(247, 242, 252, 0.8)'
                : 'rgba(50, 50, 57, 0.8)'
          }
        }}
        className="modal"
        ariaHideApp={false}
      >
        <Content>
          <div className="header">
            <div className="title">{title}</div>
            <button
              type="button"
              onClick={() => (modalAddIsOpen ? isOpenAdd() : isOpenRemove())}
            >
              <CgClose color={colors.red} size={30} />
            </button>
          </div>
          <div className="form">{children}</div>
        </Content>
      </Container>
    </>
  )
}

export default Modal

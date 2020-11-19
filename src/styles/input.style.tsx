import styled, { css } from 'styled-components'

interface ContainerProps {
  sizeType: string
}

export const Container = styled.input<ContainerProps>`
  background-color: ${props => props.theme.colors.backgroundCard};
  width: ${props => (props.sizeType === 'search' ? 435 : 458)}px;
  height: ${props => (props.sizeType === 'search' ? 49 : 45)}px;

  font-size: 1.6rem;
  font-weight: 600;

  border-radius: 10px;

  padding: 15px;
  color: ${props => props.theme.colors.cardDescription};

  ${props =>
    props.sizeType === 'search' &&
    css`
      padding-bottom: 6.5px;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    `};

  @media (max-width: 716px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 180px;
    height: ${props => (props.sizeType === 'search' ? 39 : 34)}px;
  }
`

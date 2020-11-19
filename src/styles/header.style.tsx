import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};

  transition: background-color 0.2s;

  min-height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40rem;

  .title {
    h1 {
      color: ${props => props.theme.colors.cardTitle};
      font-size: 4.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    h2 {
      color: ${props => props.theme.colors.cardTitle};
      font-size: 2.4rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }

  .bottom-content {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
    }

    input[type='checkbox'] {
      margin: 0 10px 0 20px;
      width: 20px;
      height: 20px;
      font-size: 1.6rem;
    }

    input[type='checkbox'] + label {
      font-weight: 500;
      font-size: 1.6rem;
    }

    button div svg {
      @media (max-width: 480px) {
        width: 15px;
      }
    }

    @media (max-width: 830px) {
      padding-top: 20px;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 1630px) {
    padding: 20px 20rem;
  }

  @media (max-width: 1160px) {
    padding: 20px 8rem;
  }

  @media (max-width: 716px) {
    padding: 20px 9rem;
  }

  @media (max-width: 460px) {
    padding: 20px 4rem;
  }
`

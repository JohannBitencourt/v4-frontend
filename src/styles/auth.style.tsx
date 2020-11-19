import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 5% auto;

  background: ${props => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 5%;
  }

  input {
    width: 100%;
    height: 60px;
    margin: 10px 0 10px 0;
    background-color: ${props => props.theme.colors.backgroundCard};
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.cardDescription};
    border-radius: 8px;
    padding: 0 24px;
  }

  button {
    width: 100%;
    height: 60px;
    background: #af0f2a;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  .back-link {
    display: flex;
    align-items: center;
    margin: 40px 0 10px 0;
    color: ${props => props.theme.colors.cardDescription};
    font-size: 2rem;
    text-decoration: none;
    font-weight: 700;
    transition: opacity 0.2s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`

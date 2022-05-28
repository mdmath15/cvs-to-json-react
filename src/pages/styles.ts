import styled from 'styled-components'

interface HomeProps  {
  csv?: string
  json?: string
}

export const Header = styled.header`
  background-color: var(--blue);
  height: 10vh;
  padding: 1rem 0;

  h1 {
    color: #f5f5f5;
    text-align: center;
  }
`

export const Main = styled.main`
  max-width: 1124px;
  width: 100%;
  min-height: calc(100vh - 16vh);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  button {
    padding: 0.5rem;
    border-radius: 8px;
    background-color: var(--blue);
    border: none;
    color: var(--white);
    font-weight: 600;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`

export const ContentCSV = styled.div<HomeProps>`
  width: 324px;
  height: 300px;
  background-color: var(--white);
  border-radius: 8px;
  border: 2px solid var(--blue);
  box-shadow: inset 0 0 0 2px var(--lightblue);
  display: ${(props) => (props.csv ? 'block' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: var(--blue);
    padding: 0.25rem;
    margin-top: ${(props) => (props.csv ? '0' : '1rem')};
  }
`

export const Content = styled.div<HomeProps>`
  width: 324px;
  height: 300px;
  background-color: var(--white);
  border-radius: 8px;
  border: 2px solid var(--blue);
  box-shadow: inset 0 0 0 2px var(--lightblue);
  display: ${(props) => (props.json ? 'block' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: var(--blue);
    padding: 0.25rem;
    margin-top: ${(props) => (props.json ? '0' : '1rem')};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
  }
`

export const Footer = styled.footer`
  background-color: var(--blue);
  height: 6vh;

  h3 {
    color: #f5f5f5;
    text-align: center;
    font-weight: 400;
    padding: 0.5rem 0;
  }
`

import styled from 'styled-components'

export interface HomeProps {
  csv?: string
  json?: string
  highlighted?: boolean
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

  @media (max-width: 742px) {
    flex-direction: column;
    margin: .5rem 0;
    gap: 1rem;
  }
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
  box-shadow: inset 0 0 0 2px ${(props) => (props.highlighted ? 'lightgreen' : 'var(--lightblue)')};
  display: ${(props) => (props.csv ? 'block' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: var(--blue);
    padding: 0.25rem;
    margin-top: ${(props) => (props.csv ? '0' : '1rem')};
  }

  input {
    display: none;
  }

  label {
    padding: 1rem 1rem;
    margin-top: 1rem;
    background-color: var(--blue);
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    display: block;
    border-radius: 4px;
    box-shadow: inset 0 0 0 2px var(--blue);
    cursor: pointer;

    &:active {
      box-shadow: inset 0 0 0 2px var(--lightblue);
    }
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

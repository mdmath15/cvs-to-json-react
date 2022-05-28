import Head from 'next/head'
import { ArrowsClockwise, File, FileCsv } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { ButtonsContainer, Container, Content, ContentCSV, Footer, Header, Main } from './styles'

const Home = () => {
  const [file, setFile] = useState<Blob | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const [csv, setCsv] = useState<string | null>(null)
  const [json, setJson] = useState<string | null>(null)

  useEffect(() => {
    console.log(file)

    if (file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = () => {
        setCsv(reader.result as string)
      }
    }
  }, [file])

  const onDrop = (e: any) => {
    e.preventDefault()
    setFile(e.dataTransfer.files[0])
    setFileName(e.dataTransfer.files[0].name.split('.')[0])
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const handle = () => {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      const content = e.target.result.split('\n')
      const headers = content[0].split(',')

      let result = []

      for (let i = 1; i < content.length; i++) {
        const value = content[i].split(',')
        const obj: { [key: string]: string } = {}
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = value[j]
        }
        result.push(obj)
      }
      setJson(JSON.stringify(result))
    }
    reader.readAsText(file as Blob)
  }

  const downloadJsonFile = (fileName: string) => {
    const element = document.createElement('a')
    const jsonFile = new Blob([json as string], {
      type: 'text/json'
    })
    element.href = URL.createObjectURL(jsonFile)
    element.download = `${fileName}.json`
    document.body.appendChild(element)
    element.click()
  }

  return (
    <>
      <Head>
        <title>CSV to JSON</title>
        <meta name='description' content='Convert CSV files to JSON files' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header>
        <h1>CSV to JSON</h1>
      </Header>

      <Main>
        <Container>
          <ContentCSV onDrop={onDrop} onDragOver={onDragOver} csv={csv as string}>
            {csv ? (
              <p>{csv}</p>
            ) : (
              <>
                <FileCsv size={64} color={'#006ABF'} />
                <p>Drop your CSV file here</p>
              </>
            )}
          </ContentCSV>
          <button onClick={handle} disabled={file ? false : true}>
            Convert to JSON
          </button>
        </Container>

        <ArrowsClockwise size={32} color={'#006ABF'} />

        <Container>
          <Content json={json as string}>
            {json ? (
              <p>{json}</p>
            ) : (
              <>
                <File size={64} color={'#006ABF'} />
                <p>JSON</p>
              </>
            )}
          </Content>
          <ButtonsContainer>
            <button onClick={() => downloadJsonFile(fileName)} disabled={json ? false : true}>
              Download your file
            </button>
            <button
              onClick={() => {
                setJson(''), setFile(null), setCsv('')
              }}>
              Clear
            </button>
          </ButtonsContainer>
        </Container>
      </Main>

      <Footer>
        <h3>developed by Matheus Ribeiro</h3>
      </Footer>
    </>
  )
}

export default Home

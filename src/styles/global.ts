import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f5f5f5;
        --blue: #006ABF;
        --lightblue: #00CAF9;
        --white: #F5F5F5;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5% // 14px
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export default GlobalStyle
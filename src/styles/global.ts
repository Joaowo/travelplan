import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font: 300 16px Kanit, sans-serif;
}

h1 {
  font-weight: 100;
}
`

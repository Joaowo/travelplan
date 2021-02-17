import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthProvider, ProtectRoute } from '../contexts/auth'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ProtectRoute>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ProtectRoute>
    </AuthProvider>
  )
}

export default MyApp

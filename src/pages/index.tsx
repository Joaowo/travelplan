import Head from 'next/head'
import TravelplanLogo from '../assets/logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Travelplan</title>
      </Head>

      <div className="logo">
        <TravelplanLogo />
      </div>
    </Container>
  )
}

export default Home

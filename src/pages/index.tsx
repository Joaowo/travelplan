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

      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo
        laborum odio quis quod quidem qui accusantium eum dolorem cum, incidunt
        repudiandae quaerat. Eius natus eos numquam voluptas nostrum laboriosam?
      </p>
    </Container>
  )
}

export default Home

import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Formik, Field } from 'formik'
import TravelplanLogo from '../assets/logo.svg'
import { Container } from '../styles/pages/Register'
import InputField from '../components/InputField'
import api from '../services/api'
import AuthContext from '../contexts/auth'

const Login: React.FC = () => {
  const { handleLogin } = useContext(AuthContext)

  const [feedback, setFeedback] = useState('You are not loged in')

  return (
    <Container>
      <Head>
        <title>Travelplan - Login</title>
      </Head>

      <div className="logo">
        <TravelplanLogo />
      </div>
      <h1>Login</h1>
      {feedback && <p>{feedback}</p>}
      {/*  {message && <p>{message}</p>} */}
      <Formik
        onSubmit={values => {
          console.log('form values')
          console.log(values)
          handleLogin(values.username, values.password)
        }}
        initialValues={{
          username: '',
          password: ''
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              placeholder="Username"
              name="username"
              component={InputField}
            />
            <Field
              placeholder="Password"
              name="password"
              component={InputField}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </Container>
  )
}
export default Login

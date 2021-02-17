import { useState } from 'react'

import Head from 'next/head'
import { Formik, Field } from 'formik'
import TravelplanLogo from '../assets/logo.svg'
import { Container } from '../styles/pages/Register'
import InputField from '../components/InputField'
import api from '../services/api'

const Register: React.FC = () => {
  const handleRegister = async values => {
    try {
      const response = await api.post('signup', values)
      setFeedback(response.data)
    } catch (err) {
      setFeedback(err.message || err.error)
    }
  }

  const [feedback, setFeedback] = useState('')

  return (
    <Container>
      <Head>
        <title>Travelplan - Register now!</title>
      </Head>

      <div className="logo">
        <TravelplanLogo />
      </div>
      <h1>Sing Up</h1>
      {feedback && (
        <p>
          {feedback} <a href="/login">Login Here</a>
        </p>
      )}
      <Formik
        onSubmit={handleRegister}
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              placeholder="Your Best E-mail"
              name="email"
              component={InputField}
            />
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
export default Register

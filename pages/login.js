import { useState } from 'react'

// import utility Authentication
import useUser from '../lib/auth/useUser'
import fetchJson from '../lib/auth/fetchJson'

// import components
import Layout from '../components/templates/layout'
import LoginForm from '../components/modules/loginForm'


const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    try {
      await mutateUser(
        fetchJson('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <Layout>
      <div className="login">
        <LoginForm isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          background-color: white;
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-top: 4rem;
        }
      `}</style>
    </Layout>
  )
}

export default Login
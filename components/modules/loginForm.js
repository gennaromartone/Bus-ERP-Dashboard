import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>User Login</span>
      <label>Username</label>
      <input type="text" name="username" required />
      <label>Password</label>
      <input type="password" name="password" required />
    </label>

    <button type="submit">LOGIN</button>

    {errorMessage && <p className="error">{errorMessage}</p>}

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
      span{
        margin-bottom: 2rem;
      }
      button{
        width: fit-content;
        margin: auto;
        padding: .5rem 2rem;
        border-radius: 4px;
        border: none;
        font-weight: 600;
      }
    `}</style>
  </form>
)

export default LoginForm

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
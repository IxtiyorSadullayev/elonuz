import axios from 'axios';
import React from 'react'

function Login() {
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const submitlogin = async () => {
    axios.post('/user/login', { phone, password })
      .then(data => {
        setSuccess(data.data.message);
        localStorage.setItem('verify', 'ha')
        localStorage.setItem('token', data.data.token)
        setTimeout(() => {
          window.location.href = '/add'

        }, 3000);
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  return (
    <div className='container'>
      {
        success === '' ? '' : <>
          <div className="alert alert-success">{success}</div>
        </>
      }
      {
        error === '' ? '' : <>
          <div className="alert alert-warning">{error}</div>
        </>
      }
      <div className="mb-3">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder='  ' value={phone} onChange={e => setPhone(e.target.value)} id='phone' />
          <label htmlFor="phone" className="form-label">Phone number</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" placeholder='  ' value={password} onChange={e => setPassword(e.target.value)} id='password' />
          <label htmlFor="password" className="form-label">Password</label>
        </div>

        <button className="btn btn-outline-primary w-50" onClick={() => submitlogin()} >Tekshirish.</button>
      </div>
    </div>
  )
}

export default Login
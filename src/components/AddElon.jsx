import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

function AddElon() {

  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const submitelon = async () => {
    setLoading(true)
    axios.post('/elon/add', { title, body }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(data => {
        setSuccess(data.data.message);
        setLoading(false)
        setTimeout(() => {
          setTitle('')
          setBody('')
        }, 3000);
      })
      .catch(err => {
        setError(err.response.data.message + '\n' + err.response.data.error);
        setLoading(false)
        if(err.response.data.error === 'invalid signature'){
          localStorage.removeItem('token')
          localStorage.removeItem('verify')
          window.location.href = '/login'
        }
      })
  }

  let user = localStorage.getItem('verify')
  if (user !== 'ha') {
    return (
      <>
        <div className="alert alert-warning">Foydalanuvchi identifikatsiyadan o'tmagan. E'lon qoldirish uchun identifikatsiyadan o'tishingiz zarur. Identifikatsiyadan o'tish uchun quyidagi linkga kiring. <Link to={'/login'} className='nav-link'>Identifikatsiyadan o'tish</Link></div>
      </>
    )
  }
  return (
    <div className='container'>
      {
        error === "" ? "" : <div className="alert alert-warning">{error}</div>
      }
      {
        success === "" ? "" : <div className="alert alert-success">{success}</div>

      }
      <div className="mb-3">
        <div className="form-floating">
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} id='title' placeholder=' ' />
          <label htmlFor="title">Title</label>
        </div>
      </div>
      <div className="mb-3">
        <div className="form-floating">
          <textarea name="body" id="body" cols='10' value={body} onChange={e => setBody(e.target.value)} className="form-control h-25"></textarea>
          <label htmlFor="body" className="form-label">Body</label>
        </div>
      </div>
      <button className="btn btn-outline-info w-50" onClick={()=> submitelon()}>Elon qo'shish   {loading ? 'loading' : '' }</button>
    </div>
  )
}

export default AddElon
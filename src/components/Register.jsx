import axios from 'axios';
import React from 'react'

function Register() {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [adress, setAdress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error,setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const register = async () => {
        await axios.post('/user/register', { name, surname, phone, adress, password })
            .then(data => {
                console.log(data);
                setSuccess(data.data.message);
                localStorage.setItem('user', data.data.user);
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('verify', 'ha')
                setTimeout(() => {
                    window.location.href = '/';
                }, 3000);
            })
            .catch(err => {
                console.log(err.response.data.message)
                setError(err.response.data.message)
            })
    }


    return (
        <div className='container'>
            {
                error === ""? "" : <div className="alert alert-warning">{error}</div>
            }
            {
                success === ""? "" : <div className="alert alert-success">{success}</div>
            }
            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder='  ' value={name} onChange={e => setName(e.target.value)} id='name' />
                    <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder='  ' value={surname} onChange={e => setSurname(e.target.value)} id='surname' />
                    <label htmlFor="surname" className="form-label">Surname</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder='  ' value={phone} onChange={e => setPhone(e.target.value)} id='phone' />
                    <label htmlFor="phone" className="form-label">Phone number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder='  ' value={adress} onChange={e => setAdress(e.target.value)} id='adress' />
                    <label htmlFor="adress" className="form-label">Adress</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" placeholder='  ' value={password} onChange={e => setPassword(e.target.value)} id='password' />
                    <label htmlFor="password" className="form-label">Password</label>
                </div>

                <button className="btn btn-outline-primary w-50" onClick={() => register()}>Ro'yxatdan o'tish</button>
            </div>
        </div>
    )
}

export default Register
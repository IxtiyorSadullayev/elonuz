import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Elon from './Elon'

function MyElon() {

  const [elonlar, setelonlar] = React.useState([]);
  const [error, setError] = React.useState('');
  const getelon=async ()=>{
    axios.get('/elon/my', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(data =>{
        setelonlar(data.data.elonlar);

      })
      .catch(err => {
        setError(err.response.data.error);
      })
  }



  React.useEffect(()=>{
    axios.get('/user/tekshir', {
      headers: {
        Authorization:  `Bearer ${localStorage.getItem('token')}`
      }
    })
        .then((data) =>{
            // console.log(data)
            localStorage.setItem('verify', 'ha')
        })
        .catch(err =>{
            // console.log(err)
            if(err.response.data.error === 'invalid signature'){

            }
        })

      getelon();
},[])


    let user = localStorage.getItem('verify')
    if(user !== 'ha'){
        return (
            <>
                <div className="alert alert-warning">Foydalanuvchi identifikatsiyadan o'tmagan. E'lon qoldirish uchun identifikatsiyadan o'tishingiz zarur. Identifikatsiyadan o'tish uchun quyidagi linkga kiring. <Link to={'/login'} className='nav-link'>Identifikatsiyadan o'tish</Link></div>
            </>
        )
    }
  return (
    <div className='container'>
      {
        error === '' ? "": <div className="alert alert-warning">{error}</div>
      }
      {
        elonlar.length === 0 ? <div className="alert alert-primary">Sizda hali e'lon mavjud emas,</div> : ''
      }
      {
        elonlar.map((elon, index) =>{
            return <Elon key={index}  title={elon.title} body={elon.body} like = {elon.like} createdAt={elon.createdAt} deslike = {elon.deslike}  show_count ={elon.show_count} />;
        })
      }
    </div>
  )
}

export default MyElon
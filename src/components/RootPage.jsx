import axios from 'axios';
import React from 'react'
import Elon from './Elon'

function RootPage() {

  const [elonlar, setelonlar] = React.useState([]);
  const [error, setError] = React.useState('');
  const getelon = async () => {
    axios.get('/elon/all', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(data => {
        setelonlar(data.data.elonlar);

      })
      .catch(err => {
        setError(err.response.data.error);
      })
  }

  React.useEffect(() => {
    axios.get('/user/tekshir', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((data) => {
        // console.log(data)
        localStorage.setItem('verify', 'ha')
      })
      .catch(err => {
        // console.log(err)
        if (err.response.data.error === 'invalid signature') {

        }
      })

    getelon();
  }, [])


  return (
    <div className='overflow-auto'>
      {
        error === '' ? "" : <div className="alert alert-warning">{error}</div>
      }
      {
        elonlar.map((elon, index) => {
          return <Elon key={index} title={elon.title} body={elon.body} like={elon.like} createdAt={elon.createdAt} deslike={elon.deslike} show_count={elon.show_count} />;
        })
      }
    </div>
  )
}

export default RootPage
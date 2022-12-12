import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddElon from './AddElon'
import Footer from './Footer'
import Login from './Login'
import MyElon from './MyElon'
import Navbar from './Navbar'
import Register from './Register'
import RootPage from './RootPage'
import Top from './Top'

function HomePage() {

    let verify = localStorage.getItem('verify');
   

  return (
    <div className='container'>
        <Navbar />
        <div className="row">
            <div className="col-sm-0 col-md-3 overflow-auto">
                <input type="date" className="form-control" />
                <br />
                <button className='btn btn-outline-info w-100'>Qidirish.</button>
            </div>
            <div className="col-sm-12 col-md-9 overflow-auto">
                <Routes>
                    <Route path='/' element={<RootPage />}  />
                    <Route path='/elonlar' element={<MyElon />}  />
                    <Route path='/top' element={<Top />}  />
                    <Route path='/add' element={<AddElon />}  />
                    {
                        verify !== 'ha'? <>
                        <Route path='/login' element={<Login />}  />
                    <Route path='/register' element={<Register />}  />
                        </>:<Route path='/prifile' element={'Profile'} />
                    }
                </Routes>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage
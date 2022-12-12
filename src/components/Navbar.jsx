import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    let verify = localStorage.getItem('verify')
    

    return (
        <div className='navbar navbar-expand-md'>
            <div className="container">
                <div className="navbar-brand site-brand">Mening Elonim</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarbtn" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-dark"><i className="fa fa-bars"></i></span>
                </button>
                <div className="navbar-collapse collapse" id='navbarbtn'>
                    <ul className="navbar-nav float-start">
                        <li className="nav-item"><Link to="/" className="nav-link">Bosh sahifa.</Link></li>
                        <li className="nav-item"><Link to="/elonlar" className="nav-link">Mening e'lonlarim.</Link></li>
                        <li className="nav-item"><Link to="/top" className="nav-link">Top e'lonlar.</Link></li>
                        <li className="nav-item"><Link to="/add" className="nav-link">E'lon qo'shish</Link></li>
                    </ul>
                    <ul className="navbar-nav float-end ms-5 ">
                        {
                            verify === 'ha' ? <li className='nav-item'><Link className='nav-link' to='/profile'>Profil</Link></li>: <><li className="nav-item"><Link to="/login" className="nav-link btn btn-outline-success px-5 mx-3">Kirish</Link></li>
                            <li className="nav-item"><Link to="/register" className="nav-link btn btn-outline-success px-5">Ro'yxatdan o'tish</Link></li></>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
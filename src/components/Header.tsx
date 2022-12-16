import * as logo from '../assets/logo.jpg';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useRef } from 'react';
import HowToPlay from './HowToPlay';
import SignInForm from './SignInForm';



export default function Header() {
    const logoIMG = logo.default;

    const [modal, setModal] = useState(false);

    

    return (
    <>
        <header className="header">
            <img className="logo" src={logoIMG} alt="logo" />

            <h1> | Wordle</h1>
            
            <div className='dropdown'>
                <button className='options'>&#9776;</button>
                <div className='dropdown-menu'>
                    <Link to={''} className='menu-Links'>Home Page</Link>
                    <Link to={'SignInForm'} className='menu-Links'>Sign In</Link>
                    <Link to={'App'} className='menu-Links'>Start Playing</Link>
                    <div onClick={() => setModal(!modal)} className='menu-Links'>How To Play</div>
                </div>
            </div>
        </header>

        {modal && (
            <main className="modal">
                <div className="overlay" onClick={() => setModal(!modal)}></div>
                <div className="modal-content">
                    <button className='close-modal' onClick={() => setModal(!modal)}>X</button>
                    <HowToPlay />
                </div>
                
            </main>
        )}
        
        <Outlet />
    </>
    );
  }
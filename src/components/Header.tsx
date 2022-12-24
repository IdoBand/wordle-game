import * as logo from '../assets/logo.jpg';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import HowToPlay from './HowToPlay';
import { useContext } from 'react';
import { userContext } from '../providers/userContext';

// user auth context????

export default function Header() {
    const logoIMG = logo.default;

    const [modal, setModal] = useState(false);

    const {user, setUser} = useContext<any>(userContext)

    return (
    <>
        <header className="header">
            <img className="logo" src={logoIMG} alt="logo" />

            <h1> | Wordle</h1>
            
            <div id="user-hello-dropdown-container">
                <div>
                    
                </div>
                {user? 
                <div id="user-hello"> Hello {user.firstName}</div>
                :
                <div id="user-hello">Sign In &#10154;</div>
                }
                
                <div className='dropdown'>
                    <button className='options'>&#9776;</button>
                    <div className='dropdown-menu'>
                        <Link to={''} className='menu-Links'>Home Page</Link>
                        <Link to={'SignInForm'} className='menu-Links'>Sign In</Link>
                        <Link to={'App'} className='menu-Links'>Start Playing</Link>
                        <div onClick={() => setModal(!modal)} className='menu-Links'>How To Play</div>
                        <Link to={''} onClick={() =>setUser(null)} className='menu-Links' id="menu-Links-log-out">Log Out</Link>
                    </div>
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
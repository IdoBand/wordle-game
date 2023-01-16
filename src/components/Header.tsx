import * as logo from '../assets/logo.jpg';
import { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import HowToPlay from './HowToPlay';
import { userContext } from '../providers/userContext';
import { wordleContext } from '../providers/wordleContext';

export default function Header() {
    const logoIMG = logo.default;

    const [modal, setModal] = useState(false);

    const {user, setUser} = useContext<any>(userContext)

    const {getWordFromServer, resetGame} = useContext<any>(wordleContext);

    let localStorageUser = JSON.parse(localStorage.getItem('user') as string)

    const logOutUser = () =>{
        localStorage.removeItem('user')
        setUser(null)
    }
    useEffect(() => {}, [localStorageUser])

    return (
    <>
        <header className="header">
            <img className="logo" src={logoIMG} alt="logo" />

            <h1> | Wordle
            </h1>
            
            <div id="user-hello-dropdown-container">
                <div>
                    
                </div>
                {localStorageUser? 
                <div id="user-hello"> Hello {localStorageUser.firstName}</div>
                :
                <div id="user-hello">Sign In &#10154;</div>
                }
                
                <div className='dropdown'>
                    <button className='options'>&#9776;</button>
                    <div className='dropdown-menu'>
                        <Link to={''} className='menu-Links'>Home Page</Link>
                        <Link to={'SignInForm'} className='menu-Links'>Sign In</Link>
                        <Link to={'App'} className='menu-Links' onClick={() => getWordFromServer()}>Start Playing</Link>
                        <div onClick={() => setModal(!modal)} className='menu-Links'>How To Play</div>
                        <Link to={''} onClick={() =>logOutUser()} className='menu-Links' id="menu-Links-log-out">Log Out</Link>
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
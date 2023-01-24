import * as logo from '../../assets/logo.jpg'
import { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { userContext } from '../../providers/userContext';
import { wordleContext } from '../../providers/wordleContext';

export default function Header() {
    const logoIMG = logo.default;

    const [modal, setModal] = useState(false);

    const {user, setUser} = useContext<any>(userContext)

    const {getWordFromServer, resetGame} = useContext<any>(wordleContext);

    let localStorageUser = JSON.parse(localStorage.getItem('user') as string)

    const logOutUser = () =>{
        localStorage.removeItem('user');
        const emptyUser = {};
        setUser(emptyUser);
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
                        <Link to={''} onClick={() => setModal(!modal)} className='menu-Links'>How To Play</Link>
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
                    <h1 id="how-to-play-header">How To Play</h1>
                    <h3>&#8226; You have a maximum of 6 attempts to guess a 5 letter word.</h3>
                    <h3>&#8226; After each attempt the letters you've selected will be colored according to the letters in the word you are supposed to guess.</h3>
                    <h3>&#8226; One letter can appear more than once in the word.</h3>
                    <h3>&#8226; After selecting 5 letters, press 'Enter' to find out whether you're correct or how close were you.</h3>
                </div>
                
            </main>
        )}

    <Outlet />
    
    </>
    );
  }
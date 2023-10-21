import { Link } from "react-router-dom";


import React, { useState } from 'react';
import Notification from "./comp/Notification";




function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <header>
            <div className="row">
                    <Notification/>
                </div>
            
                <nav class="navbar">
                    <div class="container-fluid">
                            <div className="logo">
                            <img src="Brand Me Now logo.png" alt="Logo" className="ms-2" />
                        </div>
                        <div className="navbar mx-auto ">
                            <div className="navbar-toggle" onClick={toggleNav}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <ul className={`link-list  ${isActive ? 'active' : ''}`}>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/">BRAND</Link></li>
                                <li><Link to="/">BESTSELLER</Link></li>
                                <li><Link to="/">COLLECTION</Link></li>
                            </ul>


                        </div>
                        <div>
                            <ul className="link-list2 me-auto">
                                <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></Link></li>
                                <li><Link to="/" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></Link></li>
                                <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg></Link></li>
                            </ul>
                        </div>


                    </div>
                </nav>
                

                <div class="overlay">
                    
                    <h2>BRAND ME NOW</h2>
                    <h3>Reasons for Choosing US</h3>
                    <p>Lorem.odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                    <br />
                    <button><span>SHOP NOW</span></button>

                </div>
            </header>

        </>
    );
}



export default Header;
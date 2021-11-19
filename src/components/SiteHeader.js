import React, { useState } from 'react';
import SiteNav from './SiteNav'
import useMediaQuery from './MediaQuery'
import './styles/SiteHeader.css'


function SiteHeader() {
    
    const [hovered, setHovered] = useState(false)

    let isPageWide = useMediaQuery('(min-width: 800px)')

    return (
        <header className="site-header">
            <div className="site-header__container">
                <div className="site-header__box">
                    <div>
                        <svg className="site-header__logo" width="24" height="24" viewBox="0 0 24 24"><path d="M19.1,8.7C20.9,10.5 20.9,13.3 19.1,15.2L20.1,16.2C22.6,13.9 22.6,10.1 20.1,7.7L19.1,8.7M18,9.8L17,10.8C17.5,11.5 17.5,12.4 17,13.1L18,14.1C19.2,12.9 19.2,11.1 18,9.8M14,1H4A2,2 0 0,0 2,3V21A2,2 0 0,0 4,23H14A2,2 0 0,0 16,21V3A2,2 0 0,0 14,1M14,20H4V4H14V20Z" /></svg>
                    </div>
                    {isPageWide && <SiteNav />}
                </div>
                <div className="site-header__box">
                    <nav className="site-header__search">
                        <form action=""
                            className="site-header__Search-bar"
                            style={hovered ? {backgroundColor:"#feed00"} : {}}
                            >
                            <input type="text"
                                className="site-header__search-input"
                                placeholder="Search..."
                                name="search"
                                id="search"
                            />
                            <button
                                className="site-header__search-button"
                                onMouseEnter={() => { setHovered(true) }}
                                onMouseLeave={() => { setHovered(false) }}
                            >
                                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.152" y1="21.47" x2="6.152" y2="13.47" stroke="#898989" strokeWidth="2"/>
                                    <circle cx="9.5" cy="7.5" r="6.5" stroke="#898989" strokeWidth="2"/>
                                </svg>
                            </button>
                        </form>
                    </nav>
                    <div className="User">
                        <svg width="30" height="30" viewBox="0 0 56 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28.5" cy="16.5" r="16.5" fill="#898989"/>
                            <path d="M0 68.3761C0 27.3763 55.5 28.3761 55.5 68.3761L0 68.3761Z" fill="#898989"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default SiteHeader;
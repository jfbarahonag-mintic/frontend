import React, { useState } from 'react';
import SiteNav from './SiteNav'
import useMediaQuery from './MediaQuery'
import './styles/SiteHeader.css'


function SiteHeader() {
    
    const [hovered, setHovered] = useState(false)

    let isPageWide = useMediaQuery('(min-width: 768px)')

    return (
        <header className="site-header">
            <div className="site-header__container">

                <div className="site-header__box">
                    <div>
                        <svg className="site-header__logo" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19.1,8.7C20.9,10.5 20.9,13.3 19.1,15.2L20.1,16.2C22.6,13.9 22.6,10.1 20.1,7.7L19.1,8.7M18,9.8L17,10.8C17.5,11.5 17.5,12.4 17,13.1L18,14.1C19.2,12.9 19.2,11.1 18,9.8M14,1H4A2,2 0 0,0 2,3V21A2,2 0 0,0 4,23H14A2,2 0 0,0 16,21V3A2,2 0 0,0 14,1M14,20H4V4H14V20Z" />
                        </svg>
                    </div>
                    {isPageWide && <SiteNav />}
                </div>
                { isPageWide === true ?
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
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                    </svg>
                                </div>
                                    
                            </button>
                        </form>
                    </nav>
                    <div className="User">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>
                        </div>
                    </div>
                </div>
                : 
                <button className='responsive-button'>
                    <div className='responsive-button__border'>
                        <div className='responsive-button__line'></div>
                        <div className='responsive-button__line'></div>
                        <div className='responsive-button__line'></div>
                    </div>
                </button>
                }
            </div>
        </header>
     );
}

export default SiteHeader;
import React, { useState } from 'react';
import SiteNav from './SiteNav'
<<<<<<< HEAD
import useMediaQuery from '../hooks/useMediaQuery'
=======
import SearchBox from './SearchBox'
import useMediaQuery from './MediaQuery'
>>>>>>> c567e40071c6a045ea2e8226ca93783540aa55c0

import './SiteHeader.css'
import SiteLogo from '../assets/cellphone.svg'
import AccountIcon from '../assets/account.svg'
import { Link } from 'react-router-dom';



function SiteHeader() {
    
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    let isPageWide = useMediaQuery('(min-width: 768px)')

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <header className="site-header">
            <div className="site-header__container">

                <div className="site-header__box">
                    <img
                        className="site-header__logo"
                        src={ SiteLogo } 
                        alt="Logotipo" 
                    />
                    { isPageWide && <SiteNav />}
                </div>

                <div className="site-header__box">
                { 
                    isPageWide ?
                    <>
                            {/* <SearchBox /> */}
                            <SearchBox/>
                            
                            <div className="User">
                                <Link to="/login">
                                    <img src={ AccountIcon } alt="User icon" />
                                </Link>
                            </div>
                        </>
                    :
                        <> 
                            <div onClick={ toggleMobileMenu } 
                                className='responsive-button'>
                                <div className='responsive-button__line'></div>
                                <div className='responsive-button__line'></div>
                                <div className='responsive-button__line'></div>
                            </div>
                            { showMobileMenu ? <SiteNav isMobile={ true } /> : '' }
                        </>
                }
                </div>
            </div>
        </header>
     );
}

export default SiteHeader;
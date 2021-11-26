import React, { useState } from 'react';
import SiteNav from './SiteNav'
import SearchBox from './SearchBox'
import useMediaQuery from './MediaQuery'

import './SiteHeader.css'
import SiteLogo from '../assets/cellphone.svg'
import AccountIcon from '../assets/account.svg'



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
                                <img src={ AccountIcon } alt="User icon" />
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
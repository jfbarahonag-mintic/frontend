import React, { useState } from 'react';
import SiteNav from './SiteNav'
import './styles/SiteHeader.css'


function SiteHeader() {
    
    const [hovered, setHovered] = useState(false)
    

    return (
        <div className="SiteHeader">
            <section className="Left">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" fill="#FEED00"/>
                </svg>
                <SiteNav />
            </section>
            <section className="Right">
                <nav className="Search">
                    <form action=""
                        className="SearchBar"
                        style={hovered ? {backgroundColor:"#feed00"} : {}}
                        >
                        <input type="text"
                            placeholder="Search..."
                            name="search"
                            id="search"
                            className="SearchInput"/>
                        <button className="SearchButton"
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
            </section>
        </div>
     );
}

export default SiteHeader;
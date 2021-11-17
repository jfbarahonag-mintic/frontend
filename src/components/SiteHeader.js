import SiteNav from './SiteNav'
import './styles/SiteHeader.css'

function SiteHeader() {
    return (
        <div className="SiteHeader">
            <section className="Left">
                <svg width="60" height="60" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="79" height="69" stroke="black"/>
                    <circle cx="39.5" cy="35.5" r="32" fill="#C4C4C4" stroke="black"/>
                </svg>

                <SiteNav />
            </section>
            <section className="Right">
                <nav className="Search">
                    <form action="" className="SearchBar">
                        <input type="text"
                            placeholder="Search..."
                            name="search"
                            id="search"
                            className="SearchInput"/>
                        <button className="SearchButton">
                            <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.152" y1="21.47" x2="6.152" y2="13.47" stroke="#898989" stroke-width="2"/>
                                <circle cx="9.5" cy="7.5" r="6.5" stroke="#898989" stroke-width="2"/>
                            </svg>
                        </button>
                    </form>
                </nav>
                <div className="User">
                    <svg width="60" height="60" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="79" height="69" stroke="black"/>
                        <circle cx="39.5" cy="35.5" r="32" fill="#C4C4C4" stroke="black"/>
                    </svg>
                </div>
            </section>
        </div>
     );
}

export default SiteHeader;
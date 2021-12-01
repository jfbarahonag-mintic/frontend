import { useState } from 'react'
import  './SearchBox.css'

const SearchBox = ({ isPageWide }) => {
    console.log(isPageWide)
    const [isCollapsed, setIsCollapsed] = useState(false)

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log (inputValue)
    }

  return (
    <div className={ "search-box" + ( isCollapsed ? " search-box--collapsed" : "" ) }>
    <form className="search-box__form" onSubmit={handleSubmit}>
        <input type="text"
            className="search-box__input"
            placeholder={isPageWide ? "true" : "false" } 
            name="search"
            id="search"
            value={inputValue}
            onChange={(e)=>handleInputChange(e)}
        />
        <button
            className="search-box__button"
            type="submit"
            
        >
            <div className="search-box__button-icon">
                <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
            </div>
                
        </button>
    </form>
</div>
  )
}

export default SearchBox

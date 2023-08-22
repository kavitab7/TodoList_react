import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
const Post = () => {
    const { theme, handleOnClick } = useContext(ThemeContext)
    return (
        <div>
            <i id='sun-icon' class="fa-regular fa-sun"></i>
            <button className={`btn-theme ${theme === 'dark' ? 'btn-light' : 'btn-dark'} `} >
                <label class="switch" >
                    <input type="checkbox" onClick={handleOnClick} />
                    <span class="slider round"></span>
                </label></button>
            <i id='moon-icon' class="fa-regular fa-moon"></i>

        </div>
    )
}

export default Post;

// Click For {theme === 'dark' ? "light" : "dark"} Mode

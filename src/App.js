import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './todoReact/Post';
import Todo from './todoReact/Todo';
import { ThemeContext, themes } from './context/themeContext';



function App() {
  const [theme, setTheme] = useState(themes.light)

  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }
  const body = document.body
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove('bg-dark')
        body.classList.add('bg-light')
        break;
      case themes.dark:
        body.classList.remove('bg-light')
        body.classList.add('bg-dark')
        break;
      default:
        body.classList.remove('bg-dark')
        body.classList.add('bg-light')

    }
    // eslint-disable-next-line
  }, [theme])
  return (
    <>


      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <Post theme={theme} />
      </ThemeContext.Provider>
      <Todo />
    </>
  );
}

export default App;

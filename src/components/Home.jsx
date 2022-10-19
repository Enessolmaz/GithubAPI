import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { UserContext } from './Context';
import Template from './Template';


function Home() {

    const {theme} = UserContext()
  return (
    <div className={theme}>
        <Template/>
    </div>
  )
}

export default Home
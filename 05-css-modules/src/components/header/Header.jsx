import React from 'react'
import header from './header.module.css'  //

const Header = () => {
  return (
    <div>
         <div className={header.head}>  {/*convinient way to use css */}
           <h1>This is header</h1> 
        </div>
    </div>
  )
}

export default Header
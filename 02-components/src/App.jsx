import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
//rafce

const App = () => {
  return (
    <div>
       <Navbar />
       <Card/>  {/*make sure it's 1st letter is capital , ye jsx file ka name as a component likhna h*/}
    </div>
  )
}

export default App

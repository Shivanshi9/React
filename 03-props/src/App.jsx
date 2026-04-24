import React from 'react'
import Card from './components/Card'

//BEFORE USING PROPS


// const App = () => {
//   return (
//     <div>
//       <Card />
//     </div>
//   )
// }

//AFTER USING PROPS

const App = () => {
  return (
    <div className='parent'>
      <Card user='Shivanshi' age={20} img="https://plus.unsplash.com/premium_photo-1773130852617-818fb7892d9a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Raushan' age={21} img="https://images.unsplash.com/photo-1633624875771-cb19f06d1f2a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Vaishnavi' age={18} img="https://images.unsplash.com/photo-1675937338222-b834fce80ba5?q=80&w=456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Ronnie' age={21} img="https://plus.unsplash.com/premium_photo-1774271481336-845c3a07f690?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App

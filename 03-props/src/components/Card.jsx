import React from 'react'

//BEFORE USING PROPS


// const Card = () => {
//   return (
//     <div className='parent'>
//         <div className='card'>
//             <img src="https://plus.unsplash.com/premium_photo-1773130852617-818fb7892d9a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//             <h1>Shivanshi</h1>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ea?</p>
//             <button>View profile</button>
//         </div>
//     </div>
//   )
// }


//AFTER USING PROPS


const Card = (props) => {
  return (
   
        <div className='card'>
            <img src={props.img} alt="" />
            <h1>{props.user} {props.age}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ea?</p>
            <button>View profile</button>
        </div>
    
  )
}

export default Card
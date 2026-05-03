import React from 'react'
import Lefttext from './Lefttext'
import Imagecontainor from './Imagecontainor'

const Page1content = () => {
  return (
    <div className='py-8 px-18 flex items-center h-[90vh] bg-amber-700 gap-10'>
        <Lefttext/>
        <Imagecontainor/>
    </div>
  )
}

export default Page1content
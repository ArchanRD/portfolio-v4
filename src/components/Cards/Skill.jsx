import React from 'react'

const Skill = ({name}) => {
    console.log(name)
  return (
    <div className=' grid grid-cols-2 mt-5 border-t-2 broder-black py-2'>
        {name.map((langName, index) => {
           return <h2 key={index} className='text-black font-handlee font-medium w-max mb-2 sm:text-lg xl:text-xl'>-{langName}</h2>
        })}
    </div>
  )
}

export default Skill
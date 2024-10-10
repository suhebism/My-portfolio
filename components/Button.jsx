import React from 'react'

const Button = ({title}) => {
  return (
    <div className='w-32 h-10 bg-[#FAE9D0] text-[#E94F54] rounded-3xl flex items-center justify-center font-bold cursor-pointer hover:text-[#e94f547a]  transition-all duration-300 ease-in-out'>
      {title}
      
    </div>
  )
}

export default Button

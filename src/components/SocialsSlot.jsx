import React from 'react'

const SocialsSlot = ({name}) => {
  return (
    <div className='w-full sm:h-[50px] h-[40px] flex items-center justify-center p-4 hover:bg-green-text bg-grey-700 rounded-lg'>
        <span className='text-white font-custom font-semibold'>{name}</span>
    </div>
  )
}

export default SocialsSlot
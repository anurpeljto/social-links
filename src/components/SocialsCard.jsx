import React from 'react'
import SocialsSlot from './SocialsSlot'
import person from '../assets/images/avatar-jessica.jpeg';
import colors from '../constants';
import { links } from '../constants';

const SocialsCard = () => {
  return (
    <div className={`flex font-custom sm:p-10 p-6 m-4 rounded-lg flex-col items-center justify-center sm:w-[400px] w-[370px] gap-4 bg-grey-900`}>
        <img src={person} className='w-[100px] h-[100px] rounded-full'/>
        <div className='flex flex-col gap-1 items-center justify-center'>
            <span className='text-3xl font-semibold text-white'>Jessica Randall</span>
            <span className='text-md text-green-text font-semibold'>London, United Kingdom</span>
        </div>

        <span className='text-whitesmoke mt-[20px]'>"Front-end developer and avid reader."</span>

        <div className='flex flex-col gap-5 w-full'>
            {
                links.map((link, index) => {
                    return <SocialsSlot key={index} name={link}/>
                })
            }
        </div>
    </div>
  )
}

export default SocialsCard
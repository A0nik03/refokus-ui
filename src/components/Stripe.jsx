import React from 'react'

const Stripe = ({data}) => {
    
  return (
    <div className='w-[16.66%] h-14 px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex justify-between items-center'>
    <img className='object-cover' src={data.url} alt = ""/>
    <span className='font-semibold text-white'>{data.number}</span>
    </div>
  )
}

export default Stripe
import React from 'react'
import Stripe from './Stripe'


const Stripes = () => {
    const data = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg",number:42},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f104c9b6ce2c0a0d0d13_botify-white.svg",number:11},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b7042241_65b2ca2282d921d99755eaf6_Logo%2520White%25201.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg",number:22},
    ]
  return (
    <div className='flex items-center mt-36'>
        {
            data.map((elem,index)=>{
                return <Stripe key={index} data = {elem}/>
            })
        }
    </div>
  )
}

export default Stripes
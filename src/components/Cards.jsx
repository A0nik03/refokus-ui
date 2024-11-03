import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
    <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
        <Card start = {false} para = {true} width = {"basis-1/3"}/>
        <Card start = {true} para = {false} width = {"basis-2/3"} hover = {"true"}/>
    </div>
    </div>
  )
}

export default Cards
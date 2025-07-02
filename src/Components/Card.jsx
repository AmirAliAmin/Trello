import React from 'react'

export default function Card({cardInfo}) {
  return (
    <div className="bg-white cursor-pointer p-2 mb-2  shadow-md rounded-md">
    <h1 className="text-black">{cardInfo.title}</h1>
  </div>
  )
}

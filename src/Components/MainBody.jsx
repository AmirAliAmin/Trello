import React from 'react'
import Filter from './Filter'
import List from './List'

export default function MainBody() {
  return (
    <div className='w-full bg-[#CD5A91] p-3'>
        <Filter/>
        <div>
        <List/>
        </div>
      
    </div>
  )
}

import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import MainBody from './MainBody';
import {Provider} from  'react-redux';
import store from '../Store/redux';

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <div className="h-screen bg-green-100">
          <Header/>
          <div className='flex'>
            <SideBar/>
            <MainBody/>
          </div>
         </div>
      </div>
    </Provider>
  )
}

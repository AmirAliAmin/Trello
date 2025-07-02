import {configureStore} from '@reduxjs/toolkit';
import Listslice from './Listslice';
const store = configureStore({
    reducer:{
        Listslice:Listslice
    }
})
export default store;
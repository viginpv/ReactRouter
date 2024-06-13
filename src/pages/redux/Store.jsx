import {configureStore} from '@reduxjs/toolkit'
import slicereducer from './UserSlice'


export default configureStore({
    reducer:{apidatas:slicereducer}
})
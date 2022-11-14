import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { web3Slice } from './reducers/web3Slice';

const main = combineReducers({
    web3: web3Slice.reducer
})


const store = configureStore({
    reducer: {
        main: main,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export default store;
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootreducer from './Reducers/index.js';
import logger from 'redux-logger'

const initialState = {}

export const store = createStore( 
    rootreducer, initialState,applyMiddleware(logger, thunk)
)
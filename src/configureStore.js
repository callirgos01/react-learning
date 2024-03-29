
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const configureStore = () => {  
    const middlewares = [thunk];
    if( process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }    
    return createStore( 
        reducer,
        applyMiddleware(...middlewares) 
    );
};

export default configureStore;
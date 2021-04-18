import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const _store = createStore(rootReducer)

// _store.subscribe(); //변화 감지

export default _store;

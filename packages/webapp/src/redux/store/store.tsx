import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../reducers/rootReducer';
import mainSaga from '../sagas/mainSaga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = () =>{
    const generateStore = createStore(rootReducer, compose(applyMiddleware(...middleware)));
    sagaMiddleware.run(mainSaga)
    return generateStore
}
    


export const wrapper = createWrapper(store);

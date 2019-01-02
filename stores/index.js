
import { 
	createStore,
	combineReducers, 
	applyMiddleware,
	compose 
} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import homeReducer from '../reducers/Home';
import loadingReducer from '../reducers/Loading';
import rootSaga from '../saga'

const rootReducer = combineReducers({
	homeReducer,
	loadingReducer
});
const sagaMiddleware = createSagaMiddleware();

const makeStore = (initialState) => {

  // Make exception for redux dev tools
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable no-undef */
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  /* eslint-enable */
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();

  // store.runSagaTask = () => {
  //   store.sagaTask = sagaMiddleware.run(rootSaga)
  // }

  // store.runSagaTask()

  return store;
};

export default makeStore;

// export default function configureStore() {
//   	const sagaMiddleware = createSagaMiddleware()
//   	const store = createStore(
//     	rootReducer,
//     	applyMiddleware(sagaMiddleware)
//   	)

// 	store.runSagaTask = () => {
// 	    store.sagaTask = sagaMiddleware.run(rootSaga)
// 	}

// 	store.runSagaTask()
// 	return store
// }
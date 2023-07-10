import {reducerpage} from "./reducerpage";
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as _createStore, combineReducers,applyMiddleware, compose   } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
// import rootReducer from './reducers'
import Checkout from "../forms/Checkout"
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig,reducerpage)
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


// export const store = _createStore(combineReducers({reducerpage}),applymiddleware(thunk));

// export const store = _createStore(reducerpage,enhancer(applyMiddleware(thunk)));
export const store = _createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export{persistor};

  
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import session from 'redux/modules/Session'
import alerts from 'redux/modules/Alerts'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    session,
    alerts,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

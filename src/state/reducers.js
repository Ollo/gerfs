import { combineReducers } from 'redux'
import { routerReducer } from 'redux-json-router'

import appReducer from 'state/app/reducer'
import gifReducer from 'state/gifs/reducer'

export const buildRootReducer = (asyncReducers) => combineReducers({
  ...asyncReducers,
  'router': routerReducer,
  'app': appReducer,
  'gifs': gifReducer
})

export default buildRootReducer

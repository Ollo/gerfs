import { LOAD_GIFS, SAVE_GIFS } from './actions'

const initialState = {
  gifs: []
}

const gifReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GIFS:
      return {
        ...state,
        gifs: { ...action.payload }
      }
    case SAVE_GIFS:
      return {
        ...state,
        gifs: [...state.gifs, { ...action.payload }]
      }
    default:
      return state
  }
}

export default gifReducer

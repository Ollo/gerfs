import api from 'utils/api'
import { generateId } from 'utils'
import { appLoading } from 'state/app/actions'

export const LOAD_GIFS = 'LOAD_GIFS'
export const SAVE_GIFS = 'SAVE_GIFS'

export const loadGifs = ({ gifs }) => (
  {
    type: LOAD_GIFS,
    payload: gifs
  }
)

export const saveGif = ({ gif }) => (
  {
    type: SAVE_GIFS,
    payload: gif
  }
)
export const loadAllGifs = () => (dispatch) => {
  dispatch(appLoading(true))
  return api.get('gifs', null)
    .then(gifs => dispatch(loadGifs({gifs})))
    .then(() => dispatch(appLoading(false)))
}

export const createGif = ({ name, url }) => (dispatch) => {
  dispatch(appLoading(true))
  return api.post('gifs', { name, url, id: generateId() })
    .then(res => {
      dispatch(saveGif(res))
      dispatch(appLoading(false))
      return Promise.resolve(res)
    })
}

export const deleteGif = (id) => () => {
  return api.delete(`gifs/${id}`)
    .then(resp => Promise.resolve(resp))
}

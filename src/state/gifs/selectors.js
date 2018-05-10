import _values from 'lodash/values'

export const selectGifs = (state) => _values(state.gifs.gifs)

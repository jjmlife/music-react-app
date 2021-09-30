import { Map } from 'immutable'
import * as actionType from './constants'

const initialState = Map({
  topBanners: [],
  hotRecommands: []
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionType.CHANGE_HOT_RECOMMAND:
      return state.set('hotRecommands', action.hotRecommands)
    default:
      return state
  }
}

export default reducer;

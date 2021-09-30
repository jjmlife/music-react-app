import * as actionType from './constants'

import {
  getTopBanners,
  getHotRecommandsAction
} from '@/network/api/discover'

const changeTopBannerAction = res => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommandAction = res => ({
  type: actionType.CHANGE_HOT_RECOMMAND,
  hotRecommands: res.result
})


export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommandsAction = () => {
  return dispatch => {
    getHotRecommandsAction().then(res => {
      dispatch(changeHotRecommandAction(res))
    })
  }
}
import React, { memo, useEffect, useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannersAction } from '@/store/module/recommand/actionCreators'

import { Carousel } from 'antd';
import {
  TopBanners,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'


export default memo(function MHHotRecommand() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef()

  const { topBanners } = useSelector(state => ({
    topBanners: state.get('recommand').get('topBanners')
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  // 需要传递给子组件， useCallback 可以进行性能优化 - 相较于 直接的函数
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0);
  }, [])

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <TopBanners bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item">
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>

        <BannerRight>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>

      </div>
    </TopBanners>
  )
})

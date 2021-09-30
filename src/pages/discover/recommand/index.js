import React, { memo, useEffect } from 'react'

import TopBanners from './cpns/top-banners'
import HotRecommand from './cpns/hot-recommand'
import NewAlbum from './cpns/new-album'
import HotRanking from './cpns/recommand-ranking'

import UserProfile from './cpns/user-profile'
import SettleSinger from './cpns/settle-singer'
import HotDj from './cpns/hot-dj'

import {
  RecommandWrapper,
  Content,
  ContentLeft,
  ContentRight
} from './style'

export default memo(function MHRecommand() {
  console.log('--- MHRecommand ---');

  return (
    <RecommandWrapper>
      <TopBanners />
      <Content className="wrap-v2">
        <ContentLeft>
          <HotRecommand />
          <NewAlbum />
          <HotRanking />
        </ContentLeft>
        <ContentRight>
          <UserProfile />
          <SettleSinger />
          <HotDj />
        </ContentRight>
      </Content>
    </RecommandWrapper>
  )
})

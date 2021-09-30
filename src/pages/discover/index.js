import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import {
  dicoverMenu
} from '@/common/local-data'
import {
  DiscoverWrapper,
  TopMenu
} from './style'


export default memo(function MHDicover(props) {
  const { route } = props

  return (
    <DiscoverWrapper>
      <div className="navbar">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link} className="item">{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
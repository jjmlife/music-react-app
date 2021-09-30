import React from "react";
import { Redirect } from "react-router-dom";

const MHDiscover = React.lazy(() => import('@/pages/discover'));
const MHDjradio = React.lazy(() => import('@/pages/discover/djradio'));
const MHArtist = React.lazy(() => import('@/pages/discover/artist'));
const MHPlaylist = React.lazy(() => import('@/pages/discover/playlist'));
const MHAlbum = React.lazy(() => import('@/pages/discover/album'));
const MHRecommand = React.lazy(() => import('@/pages/discover/recommand'));
const MHRanking = React.lazy(() => import('@/pages/discover/ranking'));

const MHFriend = React.lazy(_ => import('@/pages/friend'));
const MHMine = React.lazy(_ => import('@/pages/mine'));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (<Redirect to="/discover" />)
  },
  {
    path: '/discover',
    component: MHDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommand' />
        )
      },
      {
        path: '/discover/recommand',
        component: MHRecommand,
      },
      {
        path: '/discover/ranking',
        component: MHRanking,
      },
      {
        path: '/discover/playlist',
        component: MHPlaylist,
      },
      {
        path: '/discover/djradio',
        component: MHDjradio,
      },
      {
        path: '/discover/artist',
        component: MHArtist,
      },
      {
        path: '/discover/album',
        component: MHAlbum,
      },
    ]
  },
  {
    path: '/mine',
    component: MHMine,
  },
  {
    path: '/friend',
    component: MHFriend,
  }
];

export default routes;


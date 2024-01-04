import React from "react"
import { Navigate, useRoutes } from 'react-router-dom'

import Home from '../views/home/Home'
import Recomment from '../views/home/recomment/Recomment'
import Find from '../views/home/find/Find'
import Space from '../views/home/space/Space'
import Center from '../views/home/center/Center'

export default function IndexRouter() {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/home' />
    },
    {
      path: '/home',
      // element: lazyLoad('home/Home'),
      element: <Home />,
      children: [
        {
          path: '',
          element: <Navigate to='/home/recomment' />
        },
        {
          path: 'recomment',
          // element: lazyLoad('home/recomment/Recomment')
          element: <Recomment />
        },
        {
          path: 'find',
          // element: lazyLoad('home/find/Find')
          element: <Find />
        },

        {
          path: 'space',
          // element: lazyLoad('home/space/Space')
          element: <Space />
        },
        {
          path: 'center',
          // element: lazyLoad('home/center/Center')
          element: <Center />
        }
      ]
    }
  ])

  return element
}

// const lazyLoad = (path) => {
//   const Comp = React.lazy(() => import(`../views/${path}`))
//   return (
//     <React.Suspense fallback={<>加载中...</>}>
//       <Comp />
//     </React.Suspense>
//   )
// }
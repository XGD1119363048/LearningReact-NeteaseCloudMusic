import React from "react"
import { Navigate, useRoutes } from 'react-router-dom'


export default function IndexRouter() {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/find' />
    },
    {
      path: '/find',
      element: lazyLoad('Find')
    }
  ])

  return element
}

const lazyLoad = (path) => {
  const Comp = React.lazy(() => import(`../views/${path}`))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp />
    </React.Suspense>
  )
}
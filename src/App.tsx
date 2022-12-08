import React, { useMemo } from 'react'
// import './App.css'
import { useSelector } from 'react-redux'
import { selectApp } from './redux/selector'
import { allRouters } from './constant'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const user = useSelector(selectApp)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(join())
  // }, [dispatch])

  const routes = useMemo(() => {
    // let permitRoutes = allRouters.filter((r) => user.roles?.[r.permission])

    // let redirectRoute = permitRoutes.find((r) => r.notFoundRedirect)
    // if (redirectRoute)
    //   permitRoutes.push({
    //     path: '*',
    //     element: <Navigate to={redirectRoute.path} />,
    //   })

    return allRouters.map(({ path, element }) => ({ path, element }))
  }, [user.roles])

  return routes.length === 0 ? null : (
    <RouterProvider router={createBrowserRouter(routes)} />
  )
}

export default App

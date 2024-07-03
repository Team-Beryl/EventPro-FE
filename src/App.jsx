
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Rootlayout from './layouts/rootlayout'
import Landing from './pages/landing'
import Createevents from './pages/createevents'
import Findevents from './pages/findevents'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout/>,
      children: [
        {
          index: true,
          element: <Landing/>
        },

        {
         path: "create",
          element: <Createevents/>
        },

        {
          path: "events",
          element: <Findevents/>
        },
       
        

       





      ]
    }


  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App



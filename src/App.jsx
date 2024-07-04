
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Rootlayout from './layouts/rootlayout'
import Landing from './pages/landing'
import Createevents from './pages/createevents'
import Findevents from './pages/findevents'
import Login from './pages/loginpage'
import SignUp from './pages/signuppage'
import Wedding from './pages/wedding'
import Tech from './pages/tech'
import Music from './pages/music'
import Conference from './pages/conference'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Landing />
        },

        {
          path: "create",
          element: <Createevents />
        },

        {
          path: "events",
          element: <Findevents />
        },

        {
          path: "login",
          element: <Login />
        },
    
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "find",
          element: <Findevents />
        },

        {
          path: "marriage",
          element: <Wedding />

        },

        {
          path: "tec",
          element: <Tech />

        },

        {
          path: "muse",
          element: <Music />

        },

        {
          path: "conf",
          element: <Conference />

        }












      ]
    }
    
    

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App






/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route ,createBrowserRouter, RouterProvider, createRoutesFromChildren} from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contect/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([    // ye 1st method for routing 
//   {
//     path :'/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "/contact",
//         element : <Contact/>
//       }
//     ]


//   }
// ])


const router = createBrowserRouter(  // this is second method 
  createRoutesFromChildren(      // baki syntax to dono mai hi same hoga 
      // yahan par '/' is path  ke undar home , contact , about ka path hai 
    <Route path ='/' element={<Layout/>}>       
      <Route path = '' element={<Home/>}/>
      <Route path = 'about' element={<About/>}/>
      <Route path = 'contact' element ={<Contact/>}/>
      <Route path = 'user/:userid' element={<User/>} />
      <Route 
       loader={githubInfoLoader}  // ye loader wala concept hai 
        path = 'github'
        element={<GitHub/>}
        />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

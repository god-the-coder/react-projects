import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Children } from 'react'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
// import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//             {
//                 path: '',
//                 element: <Home/>
//             },
//             {
//                 path: 'about',
//                 element: <About/> 
//             },
//             {
//                 path: 'contact',
//                 element: <Contact/>
//             } 
//             // {
//             //     path: 'github',
//             //     element: <Github/>
//             // }
//             // {
//             //     path: 'user',
//             //     element: <User/>
//             // }
//         ]

//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='user/:userid' element={<User/>}/>
            <Route path='github' element={<Github/>}
            loader={githubInfoLoader}/>
        </Route>
    )
)

render(<RouterProvider 
    router={router}
    
    />, document.getElementById('app'))

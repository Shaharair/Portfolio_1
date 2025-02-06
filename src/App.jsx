import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Main from './Pages/Main'
import About from './Pages/About'
import RootLayout from './Components/RootLayout'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Portfolio from './Pages/Portfolio'
import Images from './Pages/Images'
import FigmaProject from './Pages/FigmaProject'
import Landing from './Pages/Landing'
import Ecommerce from './Pages/Ecommerce'
import PersonalPortfolio from './Pages/PersonalPortfolio'
import SliderProject from './Pages/SliderProject'
import ApiProject from './Pages/ApiProject'
import MyPortfolio from './Pages/MyPortfolio'
import Pages from './Pages/Pages'


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Main/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/image" element={<Images/>}></Route>
    <Route path="/figmaproject" element={<FigmaProject/>}></Route>
    <Route path="/landing" element={<Landing/>}></Route>
    <Route path="/pages" element={<Pages/>}></Route>
    <Route path="/ecommerce" element={<Ecommerce/>}></Route>
    <Route path="/personalportfolio" element={<PersonalPortfolio/>}></Route>
    <Route path="/sliderproject" element={<SliderProject/>}></Route>
    <Route path="/api" element={<ApiProject/>}></Route>
    <Route path="/myportfolio" element={<MyPortfolio/>}></Route>
  </Route>
))

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App

import Header from "./Header";

import {Outlet} from 'react-router-dom'
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
     
     </>
  )
}

export default Layout

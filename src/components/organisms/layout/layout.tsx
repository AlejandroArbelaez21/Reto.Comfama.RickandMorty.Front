import React from "react"
import Header from '../../molecules/header/header';
import Footer from '../../molecules/footer/footer';
import "./layout.scss"

const Layout = (props: any) => {

   return (
      <>
         <Header />
         <div>
            <main>{props.children}</main>
         </div>
         <Footer />
      </>
   )
}

export default Layout;

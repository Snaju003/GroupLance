import React from 'react'
import Footer from '../general/footer/Footer'
import NavBar from '../general/Navbar'



function Layout({children}) {
    return (
        <div>
                <NavBar/>
                <div className='main-content min-h-screen' style={{minHeight:"100vh"}}>
                        {children}
                </div>
                <Footer/>
        </div>
    )
}

export default Layout
import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Layout = ({children}) => {
    return (
        <div className=" h-screen w-full">
            <SideBar />
            <div className="ml-64">
                <NavBar />
                <div className="">
                {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
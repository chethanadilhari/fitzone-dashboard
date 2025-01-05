import React from 'react'
import MenuItem from '../common/MenuItem'

const SideBar = () => {
  return (
    <div className=" bg-darkBrown text-white max-w-screen-xl w-64 px-2 fixed h-full">
    <div>
        <div className="flex items-center justify-center gap-2 pt-5 pb-3">
        <div>
            <img src="/images/logo.png" alt="logo" className=" h-6" />
        </div>
        <div>
            <img src="/images/text-logo.png" alt="logo" className="h-5" />
        </div>
        </div>
    </div>

    
    <div className='w-full max-w-screen-xl mx-auto grid gap-2 justify-between py-4'>
        <div><MenuItem icon={"/images/overview-icon.png"} name={"Overview"}/></div>
        <div><MenuItem icon={"/images/membership-icon.png"} name={"Membership"}/></div>
        <div><MenuItem icon={"/images/classes-icon.png"} name={"Classes"}/></div>
        <div><MenuItem icon={"/images/trainers-icon.png"} name={"Trainers"}/></div>
        <div><MenuItem icon={"/images/support-icon.png"} name={"Support"}/></div>
        <div><MenuItem icon={"/images/payments-icon.png"} name={"Payments & Billings"}/></div>
        <div><MenuItem icon={"/images/resources-icon.png"} name={"Blog & Resources"}/></div>
        <div><MenuItem icon={"/images/settings-icon.png"} name={"Account Settings"}/></div>
        <div><MenuItem icon={"/images/logout-icon.png"} name={"Logout"}/></div>
        
    </div>
   </div>
  )
}

export default SideBar
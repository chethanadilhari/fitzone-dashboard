import React from 'react'

const MenuItem = ({icon, name, className=""}) => {
  return (
    <div>
         <div className="flex  items-center border-bronze border rounded-sm h-auto w-60 hover:bg-darkBrown2 py-2 bg-transparent">

<img 
    src={icon}
    alt="Image description"
    className="h-7 w-auto px-5 "
/>
<div className="flex flex-col font-sairaCondensed items-start  justify-center">
    <div className="text-sm font-semibold tracking-widest text-CustomGrey opacity-90">
        {name}
    </div>
   
    
</div>



</div>
</div>
   
  )
}

export default MenuItem
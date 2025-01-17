import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

const TrainersContainer = ({data}) => {
  return (
            <div className="flex flex-col items-stretch w-full text-white max-w-screen-xl  hover:border-bronze border  bg-black mx-auto px-5 xl:px-0">
                <div className="flex flex-col items-stretch">

                    <img 
                        src={data.image}
                        alt="Image description"
                        className=" w-auto h-64 "
                    />
                    <div className="flex flex-col tracking-widest font-sairaCondensed gap-4 items-center py-5 px-5 justify-center">
                        <div className="text-2xl font-bold text-bronze">
                            {data.name}
                        </div>
                        
                        <div className="text-lg font-bold text-customGrey">
                            {data.service}
                        </div>

                        <div className="text-xs text-customGrey text-center">
                            {data.description}
                        </div>

                        <div className="flex flex-col gap-4 items-center">
                                   <SocialMediaLinks/>
                                   </div>
                    </div>
 

                </div>
            </div>
    )
  
}

export default TrainersContainer
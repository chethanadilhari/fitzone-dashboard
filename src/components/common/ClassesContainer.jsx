import React from 'react'
import BronzeBtn from './BronzeBtn'

const ClassesContainer = ({data}) => {
    return (
        <section>
            <div className="w-full text-white max-w-screen-xl bg-black h-auto mx-auto mb-5 px-5 xl:px-0">
                <div className="grid items-center hover:border-bronze border-2 gap-5 justify-center">

                    <img 
                        src={data.image}
                        alt="Image description"
                        className=" w-auto md:h-24 xl:h-52 "
                    />
                    <div className="flex flex-col font-sairaCondensed gap-4 items-center py-5 px-5 justify-center">
                        <div className="text-2xl font-bold text-bronze">
                            {data.name}
                        </div>
                        
                        <div>
                            <BronzeBtn to="whyChooseUs" text="Join now"  />
                        </div>
                    </div>
 

                </div>
            </div>

        </section>
    )
}

export default ClassesContainer
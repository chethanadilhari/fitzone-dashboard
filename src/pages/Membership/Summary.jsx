import React from 'react'
import BronzeBtn from '../../components/common/BronzeBtn'

const Summary = () => {
    return (
        <section>
            <div>
                <div className="border-2 max-w-xl py-5 font-sairaCondensed tracking-widest text-white text-xs px-5 border-bronze w-full mx-auto bg-darkBrown/90">
                    <h2 className="text-bronze font-koulen text-center py-2 text-2xl ">Membership Summary</h2>

                    <div className="flex flex-col gap-5 font-bold py-3 ">
                        <div className="flex justify-between">
                            <span className="">
                                Current Membership Plan : <span className="text-bronze"> Premium</span>
                            </span>

                            <span className="">
                                Status : <span className="text-bronze border border-bronze text-md bg-customDarkGrey ml-2 px-10 py-1"> Active</span>
                            </span>

                        </div>
                        <span className="">
                            Start Date : <span className="text-bronze"> 02-01-2024</span>
                        </span>
                        <span className="">
                            End Date : <span className="text-bronze"> 02-02-1024</span>
                        </span>
                        <span className="">
                            Remaining Days : <span className="text-bronze"> 26 Days</span>
                        </span>


                    </div>
                    
                    <div className="flex gap-5 py-10 justify-between">
                            <BronzeBtn text="Renew Membership" />
                      
                     
                            <BronzeBtn text="Cancel" />
                            </div>
              </div>
            </div>
        </section>
    )
}

export default Summary
import React from 'react'


const Benefits = () => {
    return (
        <section>
            <div>
                <div className="border-2 py-5 font-sairaCondensed tracking-widest text-white text-xs px-5 border-bronze w-full mx-auto bg-darkBrown/95">
                    <h2 className="text-customGrey font-koulen text-xl ">Benefits of current membership</h2>

                    <div className="flex flex-col gap-5 font-bold py-3">
                        <div className="flex justify-between">
                            <span className="">
                                Current Membership Plan : <span className="text-bronze"> Premium</span>
                            </span>

                            <span className="">
                                Status : <span className="text-bronze border-2 border-bronze text-xl bg-gray-800 px-10 py-1"> Active</span>
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
                    
                    
              </div>
            </div>
        </section>
    )
}

export default Benefits
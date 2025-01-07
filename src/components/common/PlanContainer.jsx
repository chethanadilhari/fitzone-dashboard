import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";


const PlanContainer = ({data, className = ""}) => {
  return (
    <div className="flex justify-center text-center ">
            <div
                className={`font-sairaCondensed border-2 group w-full h-auto hover:border-bronze hover:shadow-[0_0_0_2px_#b08d57] items-center tracking-[0.1em] font-bold text-white  ${className}`}
            >
                {/* Plan Name */}
                <div className="uppercase group-hover:text-bronze transition-500 text-3xl font-bold py-3">
                    {data.name}
                </div>

                {/* Plan Description */} 
                <div className="text-sm text-center h-5 font-medium">{data.description}</div>

                {/* Plan Price */}
                <div className="font-bold my-5 group-hover:bg-bronze transtition-500 py-2 bg-gray-600 text-3xl">
                    <span className="text-5xl">${data.price}</span> <span className="text-base ">/month</span>
                </div>

                {/* Features List */}
                <div>
                    <ul className="font-light text-sm text-left h-56 list-disc pl-6">
                        {data.features.map((feature, i) => (
                            <li key={i} className="flex items-center my-2">
                                <FontAwesomeIcon
                                    icon={faSquareCheck}
                                    className="text-bronze mr-2"
                                />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action Button */}
                <div  className="">
                    <button
                        className="group-hover:border-bronze mb-5 group-hover:bg-bronze shadow-none hover:shadow-[0_0_0_2px_white] transition-shadow font-koulen text-lg tracking-[0.2em] uppercase border-2 border-customGrey bg-transparent text-white px-5 py-2  "
                    >
                        Upgrade now
                    </button>
                </div>
            </div>
        </div>
  )
}

export default PlanContainer
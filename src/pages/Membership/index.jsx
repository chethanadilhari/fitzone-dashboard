import React from 'react'
import Summary from './Summary'
import Benefits from './Benefits'

const index = () => {
  return (
    <div className=" py-5 px-5 justify between flex
     gap-5">
    <Summary/>
    <Benefits/>
    </div>
  )
}

export default index
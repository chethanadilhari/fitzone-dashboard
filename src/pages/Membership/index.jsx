import React, { useState } from 'react';
import Summary from './Summary'
import Benefits from './Benefits'
import History from './History'

const index = () => {
  return (
    <div>
    <div className="">
    <Summary />
    </div>

    <div>
        <History/>
    </div>
    </div>
  )
}

export default index
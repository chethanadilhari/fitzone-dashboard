import React, { useState } from 'react';
import Summary from './Summary'
import Benefits from './Benefits'
import History from './History'

const index = () => {
const [userPackageId, setUserPackageId] = useState('');
  return (
    <div>
    <div className="">
    <Summary setUserPackageId={setUserPackageId} />
    {/* <Benefits packageId={userPackageId}/> */}
    </div>

    <div>
        <History/>
    </div>
    </div>
  )
}

export default index
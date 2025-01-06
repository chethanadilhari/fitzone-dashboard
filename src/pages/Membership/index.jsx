import React, { useState } from 'react';
import Summary from './Summary'
import Benefits from './Benefits'
import History from './History'

const index = () => {
const [userPackageId, setUserPackageId] = useState('');
  return (
    <div>
    <div className="grid grid-cols-2 py-10 px-20 justify between
     gap-20">
    <Summary setUserPackageId={setUserPackageId} />
    <Benefits packageId={userPackageId}/>
    </div>

    <div>
        <History/>
    </div>
    </div>
  )
}

export default index
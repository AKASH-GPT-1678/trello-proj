import React from 'react'

import NewBoard from './boards';
import { useSocket } from './socket';
const Homepage = () => {

    const {connectSocket} = useSocket();

    React.useEffect(() => {
        connectSocket();
     
    }, [])
    return (
        <div>
           <NewBoard />

        </div>
    )
}

export default Homepage

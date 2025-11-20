import React from 'react'
import { checkToken } from '../libs/token';
import NewBoard from './boards';
import { useSocket } from './socket';
const Homepage = () => {
    const token = localStorage.getItem("token");
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

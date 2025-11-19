import React from 'react'
import { checkToken } from '../libs/token';
import NewBoard from './boards';
const Homepage = () => {
    const token = localStorage.getItem("token");

    React.useEffect(() => {
        if (!token) {
            window.location.href = "/login";
            return;
        }


        const status = checkToken(token);
        if (!status) window.location.href = "/login";
        console.log(token);
    }, [token])
    return (
        <div>
           <NewBoard />

        </div>
    )
}

export default Homepage

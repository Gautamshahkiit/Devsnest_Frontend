import Context from "../Context"
import { useContext } from "react"
import {Redirect} from 'react-router-dom'
export default function Profile (){
    const userInfo = useContext(Context);

    return(
        <div className="content">
            {userInfo.loggedIn ? <h1>Profile</h1> : <Redirect to="/"></Redirect>}
        </div>
    )
}
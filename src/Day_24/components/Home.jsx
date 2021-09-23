import Context from "../Context"
import { useContext } from "react"
export default function Home (){
    const userInfo = useContext(Context);
    return(
        <div className="content">
            <h1>Home</h1>
            <h2>If not logged in cant access, Profile & Dashboard</h2>
            {
                userInfo.loading ? <p>Loading...</p>:
                <button onClick={userInfo.toggle}>{userInfo.loggedIn ? 'Logout': 'Login'}</button>
            }
        </div>
    )
}   
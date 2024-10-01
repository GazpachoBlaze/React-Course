import { useState, createContext} from "react"
import CompB from "./CompB.jsx"

export const UserContext = createContext();
function CompA () {

    const [user, setUser] = useState("Gazpacho")

    return (
        <div className="box">
            <h1>Comp A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <CompB user={user}/>
            </UserContext.Provider>
            

        </div>
    )
}

export default CompA
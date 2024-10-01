import { useState } from "react"
import CompB from "./CompB.jsx"


function CompA () {

    const [user, setUser] = useState("Gazpacho")

    return (
        <div className="box">
            <h1>Comp A</h1>
            <h2>{`Hello ${user}`}</h2>
            <CompB user={user}/>

        </div>
    )
}

export default CompA
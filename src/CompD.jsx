import React, {useContext} from "react";
import { UserContext } from "./CompA.jsx";

function CompD () {
    
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Comp D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default CompD
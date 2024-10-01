import React, {useContext} from "react";
import { UserContext } from "./CompA.jsx";
import CompD from "./CompD.jsx"


function CompC () {

    const user = useContext(UserContext);
    
    return (
        <div className="box">
            <h1>Comp C</h1>
            <h2>{`Good to see you again ${user}`}</h2>
            <CompD/>
        </div>
    )
}

export default CompC
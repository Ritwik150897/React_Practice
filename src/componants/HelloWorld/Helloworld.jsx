import React from "react";

// function Helloworld() {
//     return <h3>Hello World!</h3>
// }

const Helloworld = (props) => {
    
    return (
        <div>
            <h3>Hello {props.name} {props.surname}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default Helloworld
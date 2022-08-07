import React from "react";

const Withoutjsx = () => {

    return React.createElement(
        'div', 
        {id: 'div1'}, 
        React.createElement('h3', null, "Without JSX")
    );
}

export default Withoutjsx
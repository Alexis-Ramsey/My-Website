import React from "react";

function Header(props) {

    function Add(){ props.setAdd((preAdd) => preAdd + 1)}

    return(
        <div className="row justify-content-center start">
            <div className="col-4 point" onClick={() => Add(props)}> I AM HEADER</div>
        </div>
    )
}

export default Header
import React from "react";

function Header2(props){

    //FUNCTION TO CHANGE STATE FOR HIDING THE HEADER
    function Hide(props){ 
        // CHANGES STATE TO TRUE OR FALSE
        props.setHide(preHide => !preHide); 

        //TO ADD +2 TO THE STATE WHEN THE BUTTON IS HIT TO SHOW THE HEADER
        if(props.hide == true){
            props.setAdd((preAdd) => preAdd + 2)
        }//end if 
    }//end function


    return(
        <>
            <div className="row justify-content-center start">
                <div className={`col-4 point ${ props.hide ? "hide" : "noHide"}`}>I AM HEADER 2</div>
                <span/>
                <div className={`col-4 d-flex justify-content-center ${ props.hide ? "hide" : "noHide"}`}>{props.add}</div>
            </div>
            <div className="row justify-content-center start">
                {/* A BUTTON TO HIDE AND SHOW THE HEADER */}
                <button type="button" className="button" onClick={() => Hide(props)}>HIT ME</button>
            </div>
        </>
        
    )
}

export default Header2

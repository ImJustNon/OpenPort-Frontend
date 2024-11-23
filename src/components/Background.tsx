import React from "react";

function Background(): React.JSX.Element {
    return(
        <>
            {/* <div className="fixed w-full">
                <img className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0" src={bg} />
            </div> */}
            {/* <div className="fixed top-0 left-0 w-full h-full bg-[#0d0d0d] bg-opacity-80 backdrop-blur-md z-1"></div> */}
            <div className="fixed top-0 left-0 w-full h-full bg-[#0d0d0d] z-1"></div>
        </>
    );
}


export default Background;
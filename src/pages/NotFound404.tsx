import React from "react";
import notfound404 from "../assets/404.png";
import Headroom from "react-headroom";
import Navbar from "../components/Navbar";

function NotFound404(): React.JSX.Element {
    return(
        <>  
            <div className="fixed w-full">
                <Navbar />
            </div>
            <div className="min-h-screen flex flex-row items-center">
                <div className="flex flex-col mx-auto">
                    <img className="w-[40rem]" src={notfound404} alt="404" />
                    <div className="font-bold text-3xl mt-5 text-center text-white">Whoops, 404 not found!</div>
                </div>
            </div>
        </>
    );
}

export default NotFound404;
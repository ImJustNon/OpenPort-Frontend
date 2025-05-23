import React, { useEffect, useState } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/non.png";

function MobileNavDrawer({ isOpen, onClose, onOpen }: { isOpen: boolean; onClose: () => void; onOpen: () => void }): React.JSX.Element {
    const btnRef = React.useRef<any>(null);
    const [isLogin, setIsLogin] = useState(false);


    function handleClickEditProfileSetting(){
        onClose();
    }

    
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement={"right"}
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"xs"}
                isFullHeight={true}
            >
                <DrawerOverlay />
                <DrawerContent bgColor={"rgba(0, 0, 0, 0.5)"} backdropFilter={"blur(6px)"}>
                    <DrawerHeader>
                        <div className="text-white text-center mt-7">
                            <div className="flex flex-col gap-5">
                                <img className="w-[55%] mx-auto" src={logo} alt="Logo" />
                                <div className="text-2xl">OpenPort Project</div>
                            </div>
                        </div>
                    </DrawerHeader>
        
                    <DrawerBody className="flex flex-row justify-center items-center">
                        <div className="flex flex-col gap-2">
                            <Link to={"/idk"} className="px-5 py-3 text-center text-white">
                                Random
                            </Link>
                            <Link to={"/idk"} className="px-5 py-3 text-center text-white">
                                Tags
                            </Link>
                            <Link to={"/idk"} className="px-5 py-3 text-center text-white">
                                Artists
                            </Link>
                            <Link to={"/idk"} className="px-5 py-3 text-center text-white">
                                Characters
                            </Link>
                            <Link to={"/idk"} className="px-5 py-3 text-center text-white">
                                Parodies
                            </Link>
                            <Link to={"/idk"} className="px-5 py-3 text-center text-white">
                                Groups
                            </Link>
                            <Link to={"/idk"} className="px-5 py-3 text-center text-white">
                                Info
                            </Link>
                        </div>
                    </DrawerBody>
        
                    <DrawerFooter>
                        <div className="flex flex-row justify-end w-full">
                            <div>
                                <button className="btn btn-sm btn-error text-white rounded-full" onClick={onClose}>
                                    <i className="fa-solid fa-x"></i> 
                                    {("Close")}
                                </button>
                            </div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}


export default MobileNavDrawer;
import Search from "antd/es/input/Search";
import logo from "../assets/non.png";
import { Input, useDisclosure } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faMagnifyingGlass, faPenToSquare, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileNavDrawer from "../components/MobileNavDrawer";

function Navbar(): React.JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
    const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState<boolean>(false);

    const mobileNavDrawerDisclosure = useDisclosure();
    const mobileNavDrawerDisclosureIsOpen: boolean = mobileNavDrawerDisclosure.isOpen;
    const mobileNavDrawerDisclosureOnOpen: () => void = mobileNavDrawerDisclosure.onOpen;
    const mobileNavDrawerDisclosureOnClose: () => void = mobileNavDrawerDisclosure.onClose;

    return(
        <>
            <div className="h-14 flex flex-row justify-start w-full items-center bg-[#1f1f1f] z-10 px-1">
                {/* Logo */}
                <div className="h-full flex items-center duration-300 hover:bg-[#323232] cursor-pointer px-1" onClick={() => navigate("/")}>
                    <img className="w-24" src={logo} alt="logo" />
                </div>
                {/* Search */}
                <div className="lg:w-[28rem] lg:grow-0 grow flex flex-row gap-0 mx-2">
                    <input type="text" className="outline-none grow px-5 py-2 rounded-l-md bg-[#4d4d4d] duration-300 hover:bg-[#5f5f5f] text-[#b9c4c5]" />
                    <div className="flex items-center px-3 py-1 bg-[#ed2553] duration-300 hover:bg-[#ff4c76] cursor-pointer rounded-r-md text-xl text-white">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                {/* Menu */}
                <div className="sm:hidden flex relative items-center text-[#e4eff6] duration-300 bg-[#4d4d4d] hover:bg-[#5f5f5f] cursor-pointer px-3 py-3 rounded-md" onClick={() => mobileNavDrawerDisclosureOnOpen()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="sm:flex lg:hidden hidden relative items-center text-[#e4eff6] duration-300 bg-[#4d4d4d] hover:bg-[#5f5f5f] cursor-pointer px-3 py-3 rounded-md" onClick={() => setIsNavMenuOpen((prev) => !prev)}>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <div hidden={!isNavMenuOpen} className="absolute top-12 left-[-15px] bg-[#383838] rounded-md flex flex-col gap-0 font-medium">
                        <Link to={"/random"} className="hover:bg-[#464646] py-1 px-3 pt-2 rounded-t-md">Random</Link>
                        <Link to={"#"} className="hover:bg-[#464646] py-1 px-3">Tags</Link>
                        <Link to={"#"} className="hover:bg-[#464646] py-1 px-3">Artists</Link>
                        <Link to={"#"} className="hover:bg-[#464646] py-1 px-3">Characters</Link>
                        <Link to={"#"} className="hover:bg-[#464646] py-1 px-3">Parodies</Link>
                        <Link to={"#"} className="hover:bg-[#464646] py-1 px-3">Groups</Link>
                        <Link to={"#"} className="hover:bg-[#464646] py-1 px-3 pb-2 rounded-b-md">Info</Link>
                    </div>
                </div>
                <Link to={"/random"} className="lg:flex hidden items-center h-full text-[#cdd3cb] px-2 duration-300 hover:bg-[#323232] cursor-pointer">Random</Link>
                <div className="lg:flex hidden items-center h-full text-[#cdd3cb] px-2 duration-300 hover:bg-[#323232] cursor-pointer">Tags</div>
                <div className="lg:flex hidden items-center h-full text-[#cdd3cb] px-2 duration-300 hover:bg-[#323232] cursor-pointer">Artists</div>
                <div className="lg:flex hidden items-center h-full text-[#cdd3cb] px-2 duration-300 hover:bg-[#323232] cursor-pointer">Characters</div>
                <div className="lg:flex hidden items-center h-full text-[#cdd3cb] px-2 duration-300 hover:bg-[#323232] cursor-pointer">Parodies</div>
                <div className="lg:flex hidden items-center h-full text-[#cdd3cb] px-2 duration-300 hover:bg-[#323232] cursor-pointer">Groups</div>
                <div className="lg:flex hidden items-center h-full text-[#cdd3cb] px-2 duration-300 hover:bg-[#323232] cursor-pointer">Info</div>
                {/* Spacer */}
                <div className="sm:flex hidden grow"></div>
                {/* Right Menu */}
                <div className="sm:flex hidden items-center h-full px-2 gap-x-2 cursor-pointer text-[#d9d9d9] bg-[#383838] duration-300 hover:bg-[#414141]">
                    <FontAwesomeIcon icon={faRightToBracket} /> 
                    <p>Sign in</p>
                </div>
                <div className="sm:flex hidden items-center h-full px-2 gap-x-2 cursor-pointer text-[#d9d9d9] bg-[#ed2553] duration-300 hover:bg-[#ff4c76]">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <p>Register</p>
                </div>
            </div>

            <MobileNavDrawer isOpen={mobileNavDrawerDisclosureIsOpen} onOpen={mobileNavDrawerDisclosureOnOpen} onClose={mobileNavDrawerDisclosureOnClose} />
        </>
    );
}

export default Navbar;
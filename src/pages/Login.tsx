import { Link, Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/non.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


function Login({ formType }: { formType: "LOGIN" | "REGISTER" | "RESET"; }): React.JSX.Element {
    const location: Location = useLocation();
    const queryParams: URLSearchParams = new URLSearchParams(location.search);
    const redirectPath: string | null = queryParams.get("redirect");

    const navigate: NavigateFunction = useNavigate();

    interface UserFormData {
        username: string;
        password: string;
        confirmPassword: string;
        email?: string;
    }
    const [userFormData, setUserFormData] = useState<UserFormData>({
        username: "",
        password: "",
        confirmPassword: "",
        email: undefined,
    });
    const [isShowError, setIsShowError] = useState<boolean>(false);

    useEffect(() =>{
        setIsShowError(false);
    }, [userFormData]);

    function submitForm(): void {
        if(formType === "LOGIN"){
            if(!userFormData.username || !userFormData.password) return setIsShowError(true);
            
            navigate(redirectPath ? redirectPath : "/");
        }
        else if(formType === "REGISTER"){
            if(!userFormData.username || !userFormData.password || !userFormData.confirmPassword) return setIsShowError(true);

            navigate(redirectPath ? redirectPath : "/");
        }
        else if(formType === "RESET"){
            if(!userFormData.username) return setIsShowError(true);

            navigate(redirectPath ? redirectPath : "/");
        }
    }

    return (
        <>
            <div className="min-h-screen bg-[#1f1f1f] flex flex-row justify-center w-full items-center">
                <div className="w-[400px] flex flex-col items-center gap-4">
                    <Link to={"/"} className="cursor-pointer flex justify-center">
                        <img className="w-[80%]" src={logo} alt="logo" />
                    </Link>
                    <div className="flex flex-col text-white items-center">
                        <p className="italic">Abandon all hope, ye who enter here</p>
                        <p className="italic">ここから入らんとする者は一切の希望を放棄せよ</p>
                    </div>
                    <div hidden={!isShowError} className="flex flex-col text-[#ef808a] text-sm items-center">
                        <p>Invalid username (or email) or password.</p>
                        <p>Make sure you capitalize it correctly.</p>
                    </div>
                    <div className="flex flex-col w-full px-10 gap-[1px]">
                        <input 
                            // Login and Reset pages 
                            hidden={formType !== "LOGIN" && formType !== "RESET"}
                            type="text" 
                            className="outline-none grow px-2 py-4 rounded-sm bg-[#4d4d4d] duration-300 hover:bg-[#5f5f5f] text-[#b9c4c5] placeholder:text-[#6b6a69]" 
                            placeholder="username (or email)" 
                            value={userFormData.username} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserFormData(prev => ({...prev, username: event.target.value}))} 
                        />
                        <input 
                            // Only Register page 
                            hidden={formType !== "REGISTER"}
                            type="text" 
                            className="outline-none grow px-2 py-4 rounded-sm bg-[#4d4d4d] duration-300 hover:bg-[#5f5f5f] text-[#b9c4c5] placeholder:text-[#6b6a69]" 
                            placeholder="username" 
                            value={userFormData.username} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserFormData(prev => ({...prev, username: event.target.value}))} 
                        />
                        <input 
                            // Login and Register pages
                            hidden={formType !== "LOGIN" && formType !== "REGISTER"}
                            type="password" 
                            className="outline-none grow px-2 py-4 rounded-sm bg-[#4d4d4d] duration-300 hover:bg-[#5f5f5f] text-[#b9c4c5] placeholder:text-[#6b6a69]" 
                            placeholder="password" 
                            value={userFormData.password} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserFormData(prev => ({...prev, password: event.target.value}))} 
                        />
                        <input 
                            // Only Register page
                            hidden={formType !== "REGISTER"}
                            type="password" 
                            className="outline-none grow px-2 py-4 rounded-sm bg-[#4d4d4d] duration-300 hover:bg-[#5f5f5f] text-[#b9c4c5] placeholder:text-[#6b6a69]" 
                            placeholder="confirm password" 
                            value={userFormData.confirmPassword} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserFormData(prev => ({...prev, confirmPassword: event.target.value}))} 
                        />
                        <input 
                            // Only Register page
                            hidden={formType !== "REGISTER"}
                            type="text" 
                            className="outline-none grow px-2 py-4 rounded-sm bg-[#4d4d4d] duration-300 hover:bg-[#5f5f5f] text-[#b9c4c5] placeholder:text-[#6b6a69]" 
                            placeholder="email (optional)" 
                            value={userFormData.email ?? ""} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserFormData(prev => ({...prev, email: event.target.value}))} 
                        />
                    </div>
                    <div className="flex px-10 w-full">
                        <div className="flex flex-row items-center font-bold text-white gap-1 py-3 justify-center bg-[#ed2553] text-lg w-full rounded-md cursor-pointer hover:bg-[#ff587f] duration-300">
                            <FontAwesomeIcon icon={faRightToBracket} />
                            <span onClick={() => submitForm()} hidden={formType !== "LOGIN"}>Login</span>
                            <span onClick={() => submitForm()} hidden={formType !== "REGISTER"}>Register</span>
                            <span onClick={() => submitForm()} hidden={formType !== "RESET"}>Send</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <div hidden={formType !== "LOGIN"} className="text-white">Don't have an account? <Link to={"/register"} className="font-bold hover:text-[#ed2553] duration-300">Register</Link></div> {/* Login Page */}
                        <div hidden={formType !== "LOGIN"} className="text-white">Forgot your password? <Link to={"/reset"} className="font-bold hover:text-[#ed2553] duration-300">Reset it</Link></div> {/* Login Page */}
                        <div hidden={formType !== "REGISTER"} className="text-white">Already have an account? <Link to={"/login"} className="font-bold hover:text-[#ed2553] duration-300">Login</Link></div> {/* Register Page */}
                        <div hidden={formType !== "RESET"} className="text-white">Remembered your password? <Link to={"/login"} className="font-bold hover:text-[#ed2553] duration-300">Log in</Link></div> {/* Reset Page */}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;
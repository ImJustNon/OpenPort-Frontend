import { Navigate, NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Read from "../pages/Read";
import Details from "../pages/Details";
import { useEffect } from "react";
import ReadLayout from "../layouts/ReadLayout";
import NotFound404 from "../pages/NotFound404";
import Login from "../pages/Login";

function AppRouter(): React.JSX.Element {
    return(
        <Routes>
            <Route 
                path={'/'} 
                element={
                    <AppLayout>
                        <Home />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/g/:id'} 
                element={
                    <AppLayout>
                        <Details />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/g/:id/:page'} 
                element={
                    <ReadLayout>
                        <Read />
                    </ReadLayout>
                } 
            />
            <Route 
                path={'/random'} 
                element={<RandomPortfolio />} 
            />
            <Route 
                path={'/login'} 
                element={<Login formType="LOGIN" />} 
            />
            <Route 
                path={'/register'} 
                element={<Login formType="REGISTER" />} 
            />
            <Route 
                path={'/reset'} 
                element={<Login formType="RESET" />} 
            />
            <Route 
                path={"*"}
                element={
                    <NotFound404 />
                }
            />
        </Routes>
    );
}


function RandomPortfolio(): React.JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    useEffect(() => {
        navigate(`/g/${Math.floor(Math.random() * 10) + 1}`);
    }, []);
    return(<></>);
}

export default AppRouter;
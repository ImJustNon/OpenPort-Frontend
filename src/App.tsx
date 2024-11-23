import { useState } from 'react';
import Background from './components/Background';
import AppRouter from './routers/AppRouter';
import { ChakraProvider } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

function App() {

    return (
        <>
            <Helmet>
                <title>OpenPort | by ImJustNon</title>
            </Helmet>
            <ChakraProvider>
                <Background />
                <div className="relative">
                    <AppRouter />
                </div>
            </ChakraProvider>
            
        </>
    )
}

export default App;

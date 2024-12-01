import React, { ReactElement, ReactNode } from "react";
import Navbar from "../components/Navbar";
import Headroom from "react-headroom";
import Footer from "../components/Footer";

function AppLayout({children}: {children: ReactNode;}): React.JSX.Element {
    return(
        <>
            <Headroom>
                <Navbar />
            </Headroom>
            

            <div className="max-w-[1200px] mx-auto mt-3">
                {React.Children.map(children, (child: ReactNode) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as ReactElement<any>, {
                            
                        });
                    }
                    return child;
                })}

                <Footer />
            </div>
        </>
    );
}


export default AppLayout;
import React, { ReactElement, ReactNode } from "react";
import Navbar from "../components/Navbar";
import Headroom from "react-headroom";

function ReadLayout({children}: {children: ReactNode;}): React.JSX.Element {
    return(
        <>
            <Headroom>
                <Navbar />
            </Headroom>
            

            <div>
                {React.Children.map(children, (child: ReactNode) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as ReactElement<any>, {
                            
                        });
                    }
                    return child;
                })}
            </div>
        </>
    );
}


export default ReadLayout;
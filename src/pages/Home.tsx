import { PortfolioData } from "@/types/index.type";
import { config } from "../config/config";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";





function Home(): React.JSX.Element {
    const [popularPort, setPopularPort] = useState<PortfolioData[]>([]);

    useEffect(() =>{
        (async() =>{
            const response = await axios.get(`${config.backendServer}/api/v1/portfolio/popular`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setPopularPort(response.data.data);
        })();
    }, []);

    return(
        <>
            <div className="flex flex-col bg-[#1f1f1f] rounded-md p-3 justify-center mb-5">
                <div className="flex flex-row items-center justify-center gap-2 first-letter:text-[#cad7dd] font-bold text-xl text-[#ccd8dc] my-4">
                    <FontAwesomeIcon icon={faFireFlameCurved} className="text-[#ed2553]" />
                    <p>Popular Now</p>
                </div>
                <div className="sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 grid justify-center gap-x-2 gap-y-3">
                    {popularPort.map((port: PortfolioData , i: number) => (
                        <Link to={`/g/${port.id}`} key={i}>
                            <Card imageUrl={port.sources.cover} title={port.name} language={port.language}/>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}


export default Home;
import axios from "axios";
import { config } from "../config/config";
import { useEffect, useState } from "react";
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
import { PortfolioData } from "@/types/index.type";
import Tag from "../components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import SkeletonDetails from "../components/Skeleton/SkeletonDetails";

function Details(): React.JSX.Element {

    const params: Params = useParams();
    const id: string = params.id ?? "";

    const navigate: NavigateFunction = useNavigate();

    const [portDetails, setPortDetails] = useState<PortfolioData>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() =>{
        (async() =>{
            const response = await axios.get(`${config.backendServer}/api/v1/portfolio/details/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.data.status === "OK"){  
                setPortDetails(response.data.data);
                setIsLoaded(true);
            }
        })();
    }, [id]);

    return(
        <>
            {isLoaded ? 
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1f1f1f] rounded-md px-5 py-8 mb-5">
                    <div className="lg:mb-0 mb-5 w-full">
                        <img className="lg:w-[60%] w-[350px] mx-auto rounded-md" src={portDetails?.sources.cover} alt={portDetails?.id} />
                    </div>
                    <div className="p-3 flex flex-col flex-wrap gap-4">
                        <p className="font-bold text-[#909091] text-xl">{portDetails?.name}</p>
                        <p className="font-medium text-[#909091] text-lg">{portDetails?.description}</p>
                        <p className="font-medium text-[#909091] text-lg cursor-pointer">#<span className="text-[#d9d9d9]">{id}</span></p>
                        <div className="flex flex-col gap-1">
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Tags: {portDetails?.tags.map((tag: string, i: number) => (<Tag text={tag} key={i} />))}</div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">University: <Tag text={portDetails?.university!} /></div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Faculty: <Tag text={portDetails?.faculty!} /></div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Branch: {portDetails?.branch.map((tag: string, i: number) => (<Tag text={tag} key={i} />))}</div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Program: <Tag text={portDetails?.program!} /></div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Author: <Tag text={portDetails?.author!} /></div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Language: <Tag text={(portDetails?.language!)?.toUpperCase()} /></div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Pages: <Tag text={String(portDetails?.pages!)} /></div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Type: <Tag text={portDetails?.type!} /></div>
                            <div className="font-bold text-md text-[#d9d9d9] flex flex-row items-center">Results: <Tag text={`มีสิทธิ์เข้าสัมภาษณ์ ${portDetails?.results.interview ? "✅" : "❌"}`} /> <Tag text={`มีสิทธิ์เข้าศึกษา ${portDetails?.results.pass ? "✅" : "❌"}`} /></div>
                        </div>
                        <div className="flex flex-row mt-5 gap-2">
                            <div className="px-3 py-2 bg-[#ed2553] text-[#d9d9d9] flex rounded-md font-bold items-center gap-2 cursor-pointer hover:bg-[#ff4974] duration-300"><FontAwesomeIcon icon={faHeart} /><span>Favorite</span></div>
                            <div className="px-3 py-2 bg-[#4d4d4d] text-[#d9d9d9] flex rounded-md font-bold items-center gap-2 cursor-pointer hover:bg-[#636363] duration-300"><FontAwesomeIcon icon={faDownload} /><span>Download</span></div>
                        </div>
                    </div>
                </div>
                : 
                <SkeletonDetails />
            }
            

            <div className="sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 grid bg-[#1f1f1f] rounded-md py-5 px-7 mb-5 gap-x-2 lg:gap-x-7 gap-y-3 justify-start">
                {portDetails?.sources.inner.map((page: string, i: number) =>(
                    <div className="relative cursor-pointer bg-[#262626] rounded-md" key={i} onClick={() => navigate(`/g/${id}/${i + 1}`)}>
                        <div className="opacity-0 hover:opacity-40 absolute w-full h-full rounded-md bg-white duration-300"></div>
                        <img className="w-full rounded-md" src={page} alt={`Page-${i}`}/>
                    </div>
                ))}
            </div>

            <div className="bg-[#1f1f1f] rounded-md p-3 mb-5">
                <div className="my-5 text-xl font-bold text-[#d9d9d9] text-center">More Like This</div>
                <div className="grid grid-cols-5 gap-x-1 justify-center">
                    
                </div>
            </div>
        </>
    );
}

export default Details;
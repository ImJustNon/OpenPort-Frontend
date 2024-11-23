import { PortfolioData } from "@/types/index.type";
import { config } from "../config/config";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faChevronLeft, faGear, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useRef, useState, Component } from "react";
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent, useControls, ReactZoomPanPinchContentRef, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

function Read(): React.JSX.Element {
    const params: Params = useParams();
    const id: string = params.id ?? "";
    const page: string = params.page ?? "";

    const navigate: NavigateFunction = useNavigate();

    const scaleConfig: number[] = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0];
    const [currentScaleIndex, setCurrentScaleIndex] = useState<number>(0);
    const [originalScale, setOriginalScale] = useState<{
        width: number;
        height: number;
    }>({
        width: 1280,
        height: 0,
    });
    const [imgScale, setImgScale] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0,
    });

    useEffect(() =>{
        setImgScale({
            width: originalScale.width * scaleConfig[currentScaleIndex],
            height: originalScale.height * scaleConfig[currentScaleIndex]
        });
    }, [currentScaleIndex]);

    function changeScale(mode: "zoom-in" | "zoom-out" | "reset"): void {
        if(mode === "zoom-out"){
            setCurrentScaleIndex(prev => {
                if(currentScaleIndex === 0) return prev;
                return prev - 1;
            });
        }
        else if(mode === "zoom-in"){
            setCurrentScaleIndex(prev => {
                if(currentScaleIndex === scaleConfig.length - 1) return prev;
                return prev + 1;
            });
        }
        else if(mode === "reset"){
            setCurrentScaleIndex(0);
        }
    }

    
    const [portfolioDetailsData, setPortfolioDetailsData] = useState<PortfolioData | null>(null);
    const [imgSource, setImgSource] = useState<string>("");

    useEffect(() =>{
        (async() =>{
            const response = await axios.get(`${config.backendServer}/api/v1/portfolio/details/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setPortfolioDetailsData(response.data.data ?? null);
        })();
    }, []);

    useEffect(() =>{
        setImgSource(portfolioDetailsData?.sources.inner[parseInt(page) - 1] ?? "");
    }, [id, page, portfolioDetailsData]);

    function changePage(mode: "back" | "start" | "prev" | "next" | "end"): void {
        if(mode === "start"){
            navigate(`/g/${id}/1`);
        }
        else if(mode === "prev"){
            if(parseInt(page) === 1) return;
            navigate(`/g/${id}/${parseInt(page) - 1}`);
        }
        else if(mode === "next"){
            if(parseInt(page) === portfolioDetailsData?.pages) return;
            navigate(`/g/${id}/${parseInt(page) + 1}`);
        }
        else if(mode === "end"){
            navigate(`/g/${id}/${portfolioDetailsData?.pages}`);
        }
        else if(mode === "back"){
            navigate(`/g/${id}`);
        }
    }

    function Control(): React.JSX.Element {
        return(
            <div className="flex flex-row bg-[#383838] justify-between h-11">   
                <div className="flex items-center justify-self-start text-[#f5f5f5] hover:bg-[#525252] cursor-pointer duration-300" onClick={() => changePage("back")}>
                    <FontAwesomeIcon className="px-4" icon={faReply} />
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => changePage("start")}>
                        <FontAwesomeIcon className="px-4" icon={faAnglesLeft} />
                    </div>
                    <div className="flex items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => changePage("prev")}>
                        <FontAwesomeIcon className="px-4" icon={faAngleLeft} />
                    </div>
                    <div className="flex items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer">
                        <div className="px-4">
                            <span className="font-bold">{page}</span> <span className="font-medium">of</span> <span className="font-bold">{portfolioDetailsData?.pages}</span>
                        </div>
                    </div>
                    <div className="flex items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => changePage("next")}>
                        <FontAwesomeIcon className="px-4" icon={faAngleRight} />
                    </div>
                    <div className="flex items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => changePage("end")}>
                        <FontAwesomeIcon className="px-4" icon={faAnglesRight} />
                    </div>
                </div>
                <div className="flex items-center justify-self-end">
                    <div className="sm:flex hidden items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => changeScale("zoom-out")}>
                        <FontAwesomeIcon className="px-4" icon={faMagnifyingGlassMinus} />
                    </div>
                    <div className="sm:flex hidden items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => changeScale("reset")}>
                        <span className="text-sm font-semibold px-4">{scaleConfig[currentScaleIndex]}x</span>
                    </div>
                    <div className="sm:flex hidden items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => changeScale("zoom-in")}>
                        <FontAwesomeIcon className="px-4" icon={faMagnifyingGlassPlus} />
                    </div>
                    <div className="sm:flex hidden px-5"></div>
                    <div className="flex items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer">
                        <FontAwesomeIcon className="px-4" icon={faGear} />
                    </div>
                </div>
            </div>
        );
    }

    return(
        <>
            <Control />
            <div className={`${currentScaleIndex <= 3 ? "items-center":""} flex flex-col overflow-x-auto overflow-y-visible h-auto `}>
                <img width={imgScale.width} height={imgScale.height} onLoad={(event) =>{
                    const img: HTMLImageElement = event.target as HTMLImageElement;
                    setOriginalScale({
                        width: img.width,
                        height: img.height
                    });
                }} className="lg:max-w-[300%] max-w-full bg-[#262626] overflow-clip" src={imgSource} alt="read" />
            </div>
            <Control />
        </>
    );
}

export default Read;
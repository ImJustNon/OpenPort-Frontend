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

    const [currentScale, setCurrentScale] = useState<number>(1.0);
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
        const { zoomIn, zoomOut, resetTransform } = useControls();
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
                    <div className="sm:flex hidden items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => zoomOut()}>
                        <FontAwesomeIcon className="px-4" icon={faMagnifyingGlassMinus} />
                    </div>
                    <div className="sm:flex hidden items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => resetTransform()}>
                        <span className="text-sm font-semibold px-4">{currentScale}x</span>
                    </div>
                    <div className="sm:flex hidden items-center h-full text-[#f5f5f5] hover:bg-[#525252] duration-300 cursor-pointer" onClick={() => zoomIn()}>
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
            <TransformWrapper
                initialScale={1}
                centerOnInit={false}
                wheel={{
                    disabled: true
                }}
                onTransformed={(ref: ReactZoomPanPinchRef, state: { scale: number; positionX: number; positionY: number; }) => String(state.scale).length <= 4 ? setCurrentScale(state.scale) : null}
            >
            {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                    {/* <Control /> */}
                    <TransformComponent wrapperStyle={{ width: "100%"}}>
                        <div className="flex flex-col items-center bg-[#262626] min-h-screen mb-12">
                            <img src={imgSource} alt="read" />
                        </div>
                    </TransformComponent>
                    <div className="fixed z-20 bottom-0 w-full">
                        <Control />
                    </div>
                </>
            )}
            </TransformWrapper>
        </>
    );
}

export default Read;
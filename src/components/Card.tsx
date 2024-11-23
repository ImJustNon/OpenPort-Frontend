import thailandFlag from "../assets/flags/thailand.webp";

const flags: { [key: string]: string } = {
    "th": thailandFlag
}

function Card({imageUrl, title, language}: {imageUrl: string; title: string; language: string}): React.JSX.Element {
    return(
        <>
            <div className="flex flex-col justify-center cursor-pointer group">
                <img className="w-full rounded-t-md" src={imageUrl} alt={imageUrl} />
                <div className="relative grid grid-cols-9 items-start gap-1 bg-[#404040] rounded-b-md p-1">
                    <img className="w-10 h-4 mt-1 col-span-1" src={flags[language]} alt={language} />
                    <div className="col-span-8 grow text-[#cbd6da] font-semibold max-w-48">{title.length > 40 ? title.slice(0, 40) : title}</div>

                    <div className="absolute grid grid-cols-9 items-start gap-1 bg-[#404040] duration-300 rounded-b-md p-1 opacity-0 group-hover:opacity-100">
                        <img className="w-10 h-4 mt-1 col-span-1" src={flags[language]} alt={language} />
                        <div className="col-span-8 grow text-[#cbd6da] font-semibold max-w-48">{title}</div>
                    </div>
                </div>
                
            </div>
        </>
    );
}


export default Card;
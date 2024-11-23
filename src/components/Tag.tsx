function Tag({text}: {text: string}): React.JSX.Element {
    return(
        <>
            <div className="px-2 py-1 ml-3 bg-[#4d4d4d] text-[#d9d9d9] rounded-md font-semibold text-sm cursor-pointer hover:bg-[#636363] duration-300 capitalize">
                {text}
            </div>
        </>
    );
}

export default Tag;
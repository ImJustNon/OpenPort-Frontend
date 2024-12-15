import { Skeleton, SkeletonText } from "@chakra-ui/react";


function SkeletonCard(): React.JSX.Element {
    return(
        <>
            <div className="flex flex-col justify-center cursor-pointer group">
                <Skeleton height={330} roundedTop={"md"} />
                <div className="flex flex-col items-start gap-2 bg-[#404040] rounded-b-md p-1">
                    <Skeleton className="mt-2" height="4" width="80%" />
                    <Skeleton className="mb-2" height="4" width="50%" />
                </div>
            </div>
        </>
    );
}


export default SkeletonCard;
import { Skeleton, SkeletonText } from "@chakra-ui/react";

function SkeletonDetails(): React.JSX.Element {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1f1f1f] rounded-md px-5 py-8 mb-5">
                <div className="lg:mb-0 mb-5 w-full">
                    <Skeleton width={{
                        "sm": "350px",
                        "lg": "60%"
                    }} height={"85%"} marginX={"auto"} rounded={"md"} />
                </div>
                <div className="p-3 flex flex-col flex-wrap gap-4">
                    <div className="font-bold text-[#909091] text-xl"><Skeleton height={9} width={"90%"} /></div>
                    <div className="font-medium text-[#909091] text-lg"><SkeletonText noOfLines={2} gap="4" /></div>
                    <div className="font-medium text-[#909091] text-lg cursor-pointer"><Skeleton height={6} width={"10%"} /></div>
                    <div className="flex flex-col gap-4">
                        <Skeleton height={6} width={"80%"} />
                        <Skeleton height={6} width={"50%"} />
                        <Skeleton height={6} width={"100%"} />
                        <Skeleton height={6} width={"20%"} />
                        <Skeleton height={6} width={"40%"} />
                        <Skeleton height={6} width={"100%"} />
                        <Skeleton height={6} width={"10%"} />
                        <Skeleton height={6} width={"30%"} />
                        <Skeleton height={6} width={"40%"} />
                        <Skeleton height={6} width={"60%"} />
                    </div>
                    <div className="flex flex-row mt-5 gap-2">
                        <Skeleton height={"40px"} width={100} rounded={"md"} />
                        <Skeleton height={"40px"} width={100} rounded={"md"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkeletonDetails;
'use client'
import { UNDERSCORE_NOT_FOUND_ROUTE } from "next/dist/shared/lib/constants";
import { useRouter } from "next/navigation";
const HoidanIT = () => {
    const router= useRouter();
    const handleButton = () => {
        router.push('/')
    }
    return(
        <>
        hoidanit
        <div>
            <button onClick ={()=>handleButton()}>
                backhome
                </button>
                </div>
                </>
    )
};
export default HoidanIT;

import { Link } from "react-router-dom";
import ModalClaimResources from "../components/ModalClaimResources";
import useResources from "../hooks/useResources";
import { useState } from "react";

const Ministry = () => {
  
    const {
        accumulated,
        claims,
        timers,
        claimResource,
        claimAllResources,
        formatTime,
    } = useResources()

    const [isModalOpen, setIsModalOpen] =useState(false)

    return (
        <>
            <div className="h-screen w-screen bg-[url('../img/ministry1.jpeg')] bg-cover relative">
                <Link to={"/castle"} className="absolute top-[500px] left-[100px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"> ← Back </Link>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute top-[500px] left-[580px] bg-gradient-to-r from-[#ededec] via-[#97979a] to-[#dededb] border-solid border-2 border-black font-bold rounded-xl p-2">
                    Claim resources
                </button>
            </div>

            {isModalOpen && (
                <ModalClaimResources 
                setIsModalOpen={ setIsModalOpen} 
                accumulated={accumulated}
                timers={timers}
                formatTime={formatTime}
                claimResource={claimResource}
                claims={claims}
                claimAllResources={claimAllResources}
                /> 
            
            )
            }

        </>
    )
}

export default Ministry
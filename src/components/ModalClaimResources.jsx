import React from "react"

const ModalClaimResources = ({ setIsModalOpen, accumulated, timers, formatTime, claimResource, claims, claimAllResources}) => {
    
    

    return (
        <>
        
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="flex flex-col bg-gradient-to-r from-[#ededec] via-[#97979a] to-[#dededb] h-2/4 w-2/4 p-5 rounded-xl">
                        <button
                            className="absolute top-2 right-2 h-10 w-10 rounded-full bg-gradient-to-r from-[#97979a] to-[#dededb]  text-black font-bold flex justify-center items-center"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>

                        <h2 className="font-bold">Claim your Resources</h2>

                        <div className="flex gap-5 items-center justify-between">
                            <p>Silver Accumulated: {accumulated.plata}</p>
                            <p>Time: {formatTime(timers.plata)}</p>
                            <button
                                onClick={() => claimResource('plata')}
                                className="bg-green-500 text-white rounded-xl p-2 mt-2">
                                Claim
                            </button>
                        </div>

                        <div className="flex gap-5 items-center justify-between">
                            <p>Grain Accumulated: {accumulated.trigo}</p>
                            <p>Time: {formatTime(timers.trigo)}</p>
                            <button
                                onClick={() => claimResource('trigo')}
                                className="bg-green-500 text-white rounded-xl p-2 mt-2">
                                Claim
                            </button>
                        </div>

                        <div className="flex gap-5 items-center justify-between">
                            <p>Soldiers Accumulated: {accumulated.soldados}</p>
                            <p>Time: {formatTime(timers.soldados)}</p>
                                <button
                                    onClick={() => claimResource('soldados')}
                                    className="bg-green-500 text-white rounded-xl p-2 mt-2">
                                    Claim
                                </button>

                            </div>
                            <p>Pending claims: {10 - claims}</p>

                            <button
                                onClick={claimAllResources} className="bg-green-500 text-white rounded-xl p-2 mt-4"
                            >
                                Claim All
                            </button>



                        </div>
                    </div>
        </>
        
    )
}

export default ModalClaimResources
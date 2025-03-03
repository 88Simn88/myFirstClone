import { Link } from "react-router-dom"
import media from "../assets/index.js"
import { useState } from "react"

const PrincessRoom = () => {

    /*     bg-gradient-to-r from-[#eff17c] via-[#c5c908] to-[#eff17c]
     bg-gradient-to-r from-[#ededec] via-[#97979a] to-[#dededb] */
    
    const [princessInfo, setPrincessInfo] = useState(null)
    const [style, setStyle] = useState(null)

    /* const handleClick = () => {
        setIsOpen(true)
        setFileInfo(file)
    } */

    return (


        <>
            <div className=" h-screen w-screen bg-[url('../img/room.jpeg')] bg-cover relative" >

            <h1 className="pt-5 pl-5 font-bold text-xl">Princess Room</h1>

                <div className="absolute top-[100px] left-[100px] h-350 rounded-2xl  p-3 flex gap-5">

                    {
                        media.map((file, index) => (
                            <article key={index} id={file.id} onClick={()=> setPrincessInfo(file)} className={`rounded-2xl border-solid border-4 border-${file.color} hover:scale-105 cursor-pointer`}>
                                <h2 className="bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] text-center p-2 rounded-t-lg font-bold">▪  {file.name}  ▪</h2>
                                <img className=" rouded-2xl h-[300px] " src={`${file.url}`} />
                                <p className="bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] text-center p-2 rounded-b-lg">{file.information} </p>
                            </article>
                        ))
                    }
                </div>

                {
                    princessInfo && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                            <article 
                           /*  style={{ backgroundImage: `url(${fileInfo.fondo})`}} */
                            className={"bg-gradient-to-r from-[#ededec] via-[#97979a] to-[#dededb] h-3/4 w-3/4 p-5 rounded-xl flex justify-between"}>
                            <div className="w-1/4">
                                <img className="h-full rounded-xl" src={`${princessInfo.url}`} alt="" />
                            </div>
                            <div className="w-3/4">
                                <h1 className="text-center font-bold text-2xl">{princessInfo.name} </h1>
                                
{/*                                 <div className="w-2/3 h-1 border-solid border-t-2 border-[#777777] mt-7 ml-32 "></div>
 */}
                                <p className="p-10 bg-white bg-opacity-55 mt-5 rounded-r-lg ">{princessInfo.details}</p>
                            </div>
                            <button className="rounded-xl h-10 pl-5 pr-5 ml-2 mt-80 bg-white border-solid border-2 border-black" onClick={() => setPrincessInfo(null)}> Close </button>
                            </article>

                        </div>

                    )
                }



                <Link to={"/castle/insidecastle"} className="absolute top-[570px] left-[70px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"> ← Back  </Link>

            </div>
        </>
    )
}

export default PrincessRoom
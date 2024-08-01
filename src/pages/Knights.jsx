import { Link } from "react-router-dom"
import media2 from "../assets/index2"
import { useState } from "react"

const Knights = () => {

    const [knightsInfo, setKnightsInfo] = useState(null)
    const [useFirstImageType, setUseFirstImageType] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    /* const handleClick = () => {
        setIsOpen(true)
        setFileInfo(file)
    } */

    // Función para manejar el clic en el botón
    const toggleImageType = () => {
        setUseFirstImageType(!useFirstImageType);
    };

    // Función para abrir el modal con la imagen seleccionada
    const openModal = (file) => {

        const image = useFirstImageType ? file.url : file.url2;
        setSelectedImage(image);
        setIsModalOpen(true);
        setKnightsInfo(file)
    };

    //Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false)
    }


    return (


        <>
            <div className=" h-screen w-screen bg-[url('../img/knightsplace1.jpeg')] bg-cover relative" >

                <h1 className="w-40 pt-14 pl-5 font-bold text-xl text-white ">Knights</h1>
                <button 
                className="absolute top-[59px] left-[100px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"
                onClick={toggleImageType}>
                    {useFirstImageType ? "Anime" : "Photo"}
                </button>

                <div className="absolute top-[100px] left-[100px] h-350 rounded-2xl  p-3 flex gap-5">

                    {
                        media2.map((file, index) => (
                            <article
                                key={index}
                                id={file.id}
                                onClick={() => openModal(file)}
                                className={`rounded-2xl border-solid border-4 border-${file.color} hover:scale-105 cursor-pointer`}>
                                <h2 className="bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] text-center p-2 rounded-t-lg font-bold">
                                    ▪  {file.name}  ▪
                                </h2>
                                <img
                                    className=" rouded-2xl h-[300px] "
                                    src={useFirstImageType ? file.url : file.url2}
                                    alt={`Item ${file.id}`} />
                                <p className="bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] text-center p-2 rounded-b-lg">
                                    {file.information}
                                </p>
                            </article>
                        ))
                    }
                </div>

                {
                    isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                            <article
                                /*  style={{ backgroundImage: `url(${fileInfo.fondo})`}} */
                                className={"bg-gradient-to-r from-[#ededec] via-[#97979a] to-[#dededb] h-3/4 w-3/4 p-5 rounded-xl flex justify-between"}>
                                <div className="w-1/4">
                                    <img className="h-full rounded-xl" src={`${selectedImage}`} alt="Selected" />
                                </div>
                                <div className="w-3/4">
                                    <h1 className="text-center font-bold text-2xl">{knightsInfo.name} </h1>

                                    {/*                                 <div className="w-2/3 h-1 border-solid border-t-2 border-[#777777] mt-7 ml-32 "></div>
 */}
                                    <p className="p-10 bg-white bg-opacity-55 mt-5 rounded-r-lg ">{knightsInfo.details}</p>
                                </div>
                                <button className="rounded-xl h-10 pl-5 pr-5 ml-2 mt-80 bg-white border-solid border-2 border-black" onClick={closeModal}> Close </button>
                            </article>

                        </div>

                    )
                }



                <Link to={"/castle/insidecastle"} className="absolute top-[570px] left-[70px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"> ← Back  </Link>

            </div>
        </>
    )
}

export default Knights

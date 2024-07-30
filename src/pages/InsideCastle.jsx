import { Link } from "react-router-dom"

const InsideCastle = () => {
    return (
        <>
        <div className=" h-screen w-screen bg-[url('../img/insidecastle.jpeg')] bg-cover relative" >
            
        <Link to={"/castle/insidecastle/princessroom"} className="absolute top-[250px] left-[750px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500  text-white p-2 pl-5 pr-5 text-xl ">Princess Room</Link>
        <Link to={"/castle/insidecastle/knights"} className="absolute top-[500px] left-[1000px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500  text-white p-2 pl-5 pr-5 text-xl ">Knights</Link>
        <Link to={"/castle/garden"} className="absolute top-[500px] left-[300px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500  text-white p-2 pl-5 pr-5 text-xl ">Garden</Link>

            <Link to={"/castle"} className="absolute top-[500px] left-[100px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"> ← Back  </Link>
        </div>
        </>
    )
}

export default InsideCastle
import { Link } from "react-router-dom"
/* import { userName } from "./Home.jsx" */

const Castle = () => {



    return (
        <>
            <div className=" h-screen w-screen bg-[url('../img/castle.jpeg')] bg-cover relative" >

                <h1 className="font-bold text-3xl pl-10 pt-20">Welcome </h1>

                <Link to={"/"} className="absolute top-[500px] left-[100px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"> ← Back  </Link>
                <Link to={"/castle/garden"} className="absolute top-[500px] left-[1000px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500  text-white p-2 pl-5 pr-5 text-xl ">Garden</Link>
                <Link to={"/castle/outskirts"} className="absolute top-[550px] left-[1200px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500  text-white p-2 pl-5 pr-5 text-xl ">Outskirts</Link>

                <Link to={"/castle/insidecastle"} className="absolute top-[400px] left-[500px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500 text-white p-2 pl-5 pr-5 text-xl ">Inside Castle</Link>
                <Link to={"/castle/ministry"} className="absolute top-[300px] left-[720px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500  text-white p-2 pl-5 pr-5 text-xl ">Ministry of Interior </Link>

            </div>
        </>
    )
}

export default Castle
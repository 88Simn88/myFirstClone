
import { Link } from "react-router-dom"

const Garden = () => {

    /* const [userName, setUserName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setUserName(e.target.value) */




    return (
        <>
            <div className=" h-screen w-screen bg-[url('../img/garden.jpeg')] bg-cover relative" >

                <Link to={"/castle/insidecastle"} className="absolute top-[300px] left-[820px] bg-gradient-to-r from-black via-[#222222] to-black rounded-xl hover:scale-90 hover:text-lime-500 text-white p-2 pl-5 pr-5 text-xl ">Inside Castle</Link>

                <Link to={"/castle"} className="absolute top-[500px] left-[100px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"> ← Back  </Link>
            </div>
        </>
    )
}

export default Garden

import { Link } from "react-router-dom"

const Home = () => {

   

    

    return (
        <>
            <div className=" md:h-[640px] h-[720px] md:w-[1360px] w-[1360px] bg-[url('../img/castlefondo.png')] bg-cover relative" >

                {/* <form onSubmit={handleSubmit}>
                    <label htmlFor="">Enter your username</label>
                    <input placeholder="Your name" className="" type="text" />

                </form> */}
                    <Link to={"/castle"} className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 absolute top-[500px] left-[600px] p-3 pl-10 pr-10 cursor-pointer hover:scale-90 text-white font-bold rounded-2xl border-solid border-2 border-black text-5xl"> Start</Link>
                <h1 className="pt-14 text-center text-5xl font-bold ">King´s Castle</h1>
            </div>
        </>
    )
}

export default Home
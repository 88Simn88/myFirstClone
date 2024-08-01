import { useState } from "react"
import { Link } from "react-router-dom"

const Outskirts = () => {

const [background, setBackground] = useState({ 
    title: "Castle Door",
    url:"../img/castledoor.png",
})

const backgrounds = [

    {
        title: "Fair",
        url: "../img/fair.png"
    },
    {
        title: "East Forest",
        url: "../img/forests1.jpeg"
    },
    {
        title: "West Forest",
        url: "../img/forests2.jpeg"
    },
    {
        title: "North Town",
        url: "../img/town1.jpeg"
    },
    {
        title: "South Town",
        url: "../img/town2.jpeg"
    },
]

const changeBgRandomly = () => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    setBackground(randomBg)
}



    return (
        <>


            <div 
             style={{ backgroundImage: `url(${background.url})`}}
                       
            className=" h-screen w-screen bg-cover relative" >
                      <h2
                      className="absolute top-[100px] font-bold left-[610px] p-2 pl-5 pr-5 text-bold bg-white text-xl"
                      >{`${background.title}`}</h2>
            {
                background.url ===  "../img/castledoor.png" 
                ?  
                <h1 
                className="p-20 text-xl font-bold">
                    Outskirts
                </h1>
                : <></>
            }


                <button
                onClick={changeBgRandomly}
                className="absolute h-10 bg-blue-500 rounded-xl p-2 top-[500px] left-[620px] font-bold border-solid- border-2 border-white"
                >
                    Go for a walk
                </button>

                <Link to={"/castle"} className="absolute top-[500px] left-[100px] bg-gradient-to-r from-[#ededec] via-[#b9b9ab] to-[#ededec] hover:scale-90 border-solid border-2 border-black rounded-xl p-1 pl-5 pr-7 font-bold text-xl"> ← Back  </Link>

            </div>
        </>
    )

}

export default Outskirts
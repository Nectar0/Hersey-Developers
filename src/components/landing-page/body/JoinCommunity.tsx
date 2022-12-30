import React from "react";
import joincommunity from "../assets/images/joincommunity.png"

const JoinCommunity: React.FC<{}> = () => {
    return (
        <div className=" bg-zinc-200 shadow-md overflow-hidden">
            <div className="flex">
                <img className="w-1/2 m-12" src={joincommunity}></img>
                <div className="w-1/2 m-12">
                    <h3 className=" mt-24 text-left font-Grotesk font-bold text-4xl">Join the <a className="text-teal-600">community</a></h3>
                    <p className="mt-8 font-UI font-light text-zinc-600 text-lg text-left">Make new friends with developers in your pod, gain direct access to leaders for help at anytime, and join AMAs with Industry Professionals throughout the internship!</p>
                </div>

            </div>

        </div>

    )
}

export default JoinCommunity;
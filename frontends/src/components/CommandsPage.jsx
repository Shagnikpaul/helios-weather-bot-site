import CommandCard from "./CommandCard";
import axios from "axios";
import { useEffect, useState } from "react";
export default function CommadnsPage(params) {
    let dat = [];
        
    const [d , setD] = useState([]);
    let getData = function() {
        axios.get("https://helios-weather-bot-site-git-ui-beta-shagnikpaul.vercel.app/api/data/?format=json",{ transformResponse: (r) => r }).then( (res) => {
            const k = res.data;
            dat = JSON.parse(k);
            const r = dat.map(d => <CommandCard  data = {{commands_syntax: d['commands_syntax'], description: d['description'], is_Admin:d['is_Admin']}}/>);
            setD(r)
            console.log("Data Updated")
        }).catch(err => {
            console.log("OHNO");
        })
    } 
    useEffect(getData,[])
    return(
        <>
            <div className="lg:mx-20 mx-5">
                <div className="">
                    <h1 className="nav-margin mb-4 text-4xl font-bold leading-none tracking-tight text-textaccents-light dark:text-textaccents-dark md:text-5xl lg:text-6xl dark:text-white">Commands List.</h1>
                    <p className="text-md md:text-xl lg:text-xl font-medium text-white text-textaccents-light/60 dark:text-textaccents-dark/60">Below are all the commands currently supported by the bot. (Almost all of them are slash commands.)</p>
                </div>

                <div className="dark:bg-backgrd-dark/60 bg-backgrd-light/60 backdrop-blur-lg mt-6 p-7 rounded-xl border dark:border-textaccents-dark border-backgrd-dark">
                    { d }
                </div>
            </div>
            
        </>
    )
}
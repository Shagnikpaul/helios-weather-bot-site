import CommandCard from "./CommandCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "wouter";
export default function CommadnsPage(params) {
    let dat = [];
        
    const [d , setD] = useState([]);
    const [msg, setMsg] = useState("Loading Commands from the server...")
    let getData = function() {
        axios.get("https://heliosweatherbot.vercel.app/api/data/?format=json",{ transformResponse: (r) => r }).then( (res) => {
            const k = res.data;
            dat = JSON.parse(k);
            const r = dat.map(d => <CommandCard  data = {{commands_syntax: d['commands_syntax'], description: d['description'], is_Admin:d['is_Admin']}}/>);
            setD(r)
            setMsg(`Total ${dat.length} commands available.`)
            console.log("Data Updated")
        }).catch(err => {
            console.log("OHNO");
        })
    } 
    useEffect(getData,[])
    return(
        <>
            <div className="lg:mx-20 mx-5 nav-margin">
            
                <div className="">

                <p class="text-gray-500 text-left md:text-right lg:text-right dark:text-gray-400">
                <Link href="/">
                    <a href="/" class="inline-flex items-center font-semibold text-textaccents-light dark:text-textaccents-dark underline mt-5 mb-3">
                        <svg class="w-4 h-4 mr-2 text-gray-800 dark:text-textaccents-dark text-textaccents" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        Home Page
                    </a>
                </Link>
                </p>


                <h1 className=" mb-4 text-4xl font-bold leading-none tracking-tight text-textaccents-light dark:text-textaccents-dark md:text-5xl lg:text-6xl dark:text-white">Commands List.</h1>
                <p className="text-md md:text-xl lg:text-xl font-medium text-white text-textaccents-light/60 dark:text-textaccents-dark/60">Below are all the commands currently supported by the bot. (Almost all of them are slash commands.)</p>
            </div>

                <div className="dark:bg-backgrd-dark/60 bg-backgrd-light/60 mt-6 p-7 rounded-xl border dark:border-textaccents-dark border-backgrd-dark">
                        { d }
                    <p className="text-center mt-4 font-poppins font-bold text-xs lg:text-sm text-textaccents-light/60 dark:text-textaccents-dark/60">{msg}</p>
                </div>
                <p className="text-center mt-10 mb-2 font-poppins font-bold text-xs lg:text-sm text-textaccents-light/60 dark:text-textaccents-dark/60">Developed with 🗿 by Shagnik Paul.</p>
            </div>
            
        </>
    )
}
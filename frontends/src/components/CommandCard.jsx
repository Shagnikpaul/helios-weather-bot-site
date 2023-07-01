import { useState, useEffect } from "react"
export default function CommandCard({data}) {

    const [dat, setDat] = useState({commands_syntax : data.commands_syntax || "/none", description: data.description, is_Admin : data.is_Admin})

    
    return(
        <div className="mb-6">
            <p className=" mr-3 mb-3"><span className=" bg-textaccents dark:bg-textaccents-dark text-textaccents-dark dark:text-textaccents p-2 rounded-md font-sourcecode font-semibold" >{dat.commands_syntax}</span> </p>
            <p className="para font-poppins text-md lg:text-lg md:text-lg text-minoraccents-light dark:text-minoraccents-dark">{(dat.description.split('=')).map(s => <span>{s}<br /></span>)}</p>
            <p className="font-poppins font-bold text-xs lg:text-sm text-textaccents-light/60 dark:text-textaccents-dark/60">{(dat.is_Admin == true) ? "DOES":"DOES NOT"} REQUIRE A USER WITH ADMIN PERMISSION.</p>
            <hr class="h-px my-8 bg-minoraccents/20 border-0 dark:bg-buttonMinor/10"></hr>
        </div>
    )
};

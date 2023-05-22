
export default function NavBar() {
  function gogo(){
    console.log("LMAOOOOOOOOOOOO")
    
  }
  return(
    <>
      <nav className="bg-cardbg/25 shadow-sm backdrop-blur-lg dark:bg-cardbg-dark/25 fixed w-full z-20 top-0 left-0 py-2">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          
        <a href="#" className="flex items-center">
            <img src="https://i.imgur.com/X0cEcCf.png" className="h-10 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-textaccents dark:text-textaccents-dark">Helios Weather Bot.</span>
        </a>
        
        <div className="flex md:order-2">
            <button type="button" className="font-semibold text-orange-200 bg-buttonMinor/50 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 shadow-md"><a target="_blank" href="https://discord.com/oauth2/authorize?client_id=1045392740499853312&permissions=429497117776&scope=bot"> Invite Me</a></button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
        </div>
  

        </div>
      </nav>
    </>
  )
};

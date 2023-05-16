
export default function MainPage(params) {
  return(
    <div>
      <div className=" flex flex-row mx-5  flex-wrap justify-center h-screen space-y-64">
        
        
        <div className="leftside basis-4/12 flex-grow">


        <div className="left flex flex-col justify-center h-full m-12">
          
          <div className="flex flex-row justify-center">
              <div class="mb-11 max-w-2xl p-11 bg-cardbg/20 border-8 morerou dark:bg-cardbg-dark/25 border-borc/40 dark:border-borc-dark/20 shadow-2xl">
              <a href="#">
                  <h5 class="mb-2 font-bold tracking-tight text-textaccents dark:text-textaccents-dark text-6xl">Helios</h5>
              </a>
              <p className=" text-textaccents/50 dark:text-textaccents-dark/50 font-medium text-lg">A Discord Weather Bot.</p>
              <p class="mb-3 font-normal text-textaccents/80 dark:text-textaccents-dark/80 text-2xl pt-5">
                
                An <span className="underline">open source</span> open source discord weather bot 
                for all your weather needs right in 
                your discord server. It can send updated 
                current weather data every 30 mins to any 
                text channel you want just like any weather feed service.  
          
              </p>
              <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                  See our guideline
                  <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </a>
          </div>

          </div>

        </div>  
       
        </div>


        <div className="right text-center flex flex-col justify-center basis-8/12 pb-11">
        <div className="d"> 
            <h1 class="-mt-64 mb-4 text-5xl font-bold leading-none tracking-tight text-textaccents md:text-5xl lg:text-6xl dark:text-textaccents-dark">Invite me to get started!</h1>
            <p class="mb-6 text-lg font-medium text-minoraccents lg:text-xl sm:px-16 xl:px-48 dark:text-minoraccents-dark">😇 Free, forever, no paid features.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-center text-white dark:text-borc-light bg-buttonMajor dark:bg-buttonMajor-dark rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Learn more
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        </div>

      </div>
      
    </div>
  );
};

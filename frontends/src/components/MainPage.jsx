import { Link, Route } from "wouter";
export default function MainPage(params) {
  return(
    <div>
      <div className=" flex flex-row mx-5  flex-wrap justify-center h-screen space-y-64">
        
        
        <div className="leftside basis-4/12 flex-grow">


        <div className="left flex flex-col justify-center h-full m-10 mt-16">
          
          <div className="flex flex-row justify-center">
              <div class="backdrop-blur-lg mb-11 max-w-2xl p-11 bg-cardbg/15 morerou dark:bg-cardbg-dark/30 border-borc/10 dark:border-borc-dark/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.15)]">
              <a href="https://github.com/Shagnikpaul/helios-weather-bot">
                  <h5 class="mb-2 font-bold tracking-tight text-textaccents dark:text-textaccents-dark text-6xl">Helios</h5>
              </a>
              <p className=" text-textaccents/50 dark:text-textaccents-dark/50 font-medium text-lg">A Discord Weather Bot.</p>
              <p class="mb-3 font-normal text-textaccents dark:text-textaccents-dark/80 text-2xl sm:text-3xl pt-5">
                
                An <span className="underline">open source</span> discord weather bot 
                for all your basic weather forecast info right in 
                your discord server. It can send updated 
                current weather data every 35 minutes to any 
                text channel you want just like any weather feed service.  
          
              </p>

               <div className="inline-flex items-baseline">
          
              <p className="font-poppins text-semibold mt-10 text-textaccents/80 dark:text-textaccents-dark/90">
               
              Weather data by <a href="https://openweathermap.org/" className="font-semibold hover:text-tahiti">OpenWeatherMap</a> and bot developed by <a href="https://github.com/Shagnikpaul" className="font-semibold hover:text-tahiti">Shagnik Paul</a>.</p>
                </div>   
               
              
          </div>

          </div>
          <p className="frame"></p>

        </div>  
       
        </div>


        <div className="right text-center flex flex-col justify-center basis-8/12 pb-11">
        <div className="d"> 
            <h1 class="-mt-64 mb-4 text-5xl font-bold leading-none tracking-tight text-textaccents md:text-5xl lg:text-7xl dark:text-textaccents-dark">Invite me to get started!</h1>
            <p class="mb-20 text-lg font-medium text-minoraccents lg:text-xl sm:px-16 xl:px-48 dark:text-minoraccents-dark">😇 Free, forever, no paid features.</p>
            <div className="flex flex-row flex-wrap justify-center gap-4">



                <a data-tooltip-target="tooltip-animation" href="https://discord.com/api/oauth2/authorize?client_id=1045392740499853312&permissions=429497117776&scope=bot" class="inline-flex items-center justify-center px-10 py-3 text-base font-semibold text-center text-buttonText dark:text-buttonText-dark bg-buttonMajor dark:bg-buttonMajor-dark rounded-lg hover:bg-buttonMajor/80 dark:hover:bg-buttonMajor-dark/80  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Invite
                </a>

                <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Invite the bot to your discord server!
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <Link href="/commands"> 
                
                  <a data-tooltip-target="tooltip-animation2" href="https://shagniks-organization.gitbook.io/helios-weather-bot/" class="inline-flex items-center justify-center px-8 py-3  text-base font-semibold text-center text-buttonText dark:text-buttonText-dark bg-buttonMajor dark:bg-buttonMajor-dark rounded-lg hover:bg-buttonMajor/80 dark:hover:bg-buttonMajor-dark/80  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Bot Commands
                
                </a>
                
                </Link>
                
                <div id="tooltip-animation2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Guide to use the bot.
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            
            
        </div>
        </div>
      
      </div>
    </div>
  );
};

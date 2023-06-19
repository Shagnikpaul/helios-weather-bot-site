import axios from 'axios';


export default function WIP() {
  
  axios.get('http://127.0.0.1:8000/data/?format=json').then(function(res){
      console.log(res.data)
  }).catch(function(err) {
    console.log("ERR!!!")
  });
  
  return(
    <>
      <div className="bg-orange-200 dark:bg-orange-900  nav-margin text-center w-screen">
        
        <div className="mx-auto p-7">
          <img className="h-auto mx-auto  rounded-xl shadow-xl dark:shadow-gray-800" src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F041%2F943%2F1aa1blank.jpg" alt="image description" />
        </div>
        
        <h1 className="text-center mt-10 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-orange-100">Cooking something Interesting...</h1>
        <p className='text-center heading mt-5 dark:text-white mb-3 text-lg font-normal px-8 text-orange-600 lg:text-xl sm:px-16 xl:px-48 dark:text-orange-400'>
          I might take a while to complete this website; till then, why don't you try the Discord Weather Bot for whom this website is being made? Click on the top-right button to invite the bot, and click the link below for <span className="text-orange-600">instructions</span> on how to use the bot.
        </p>
        <a target="_blank" href="https://shagniks-organization.gitbook.io/helios-weather-bot/" class="mt-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Commands and Features
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
      
    </>
  )
}

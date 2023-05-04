export default function Footer() {
  return(
    <>
      <footer class="bg-white  shadow  dark:bg-blue-900">
          <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://github.com/Shagnikpaul/" class="hover:underline">Developed by Shagnik Paul</a>.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a target='_blank' href="https://github.com/Shagnikpaul/helios" class="mr-4 hover:underline md:mr-6 ">Project GitHub Page</a>
              </li>
          </ul>
          </div>
      </footer>
    </>
  )
};

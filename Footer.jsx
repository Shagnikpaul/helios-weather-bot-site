export default function Footer() {
  return(
    <div>
      <footer class="bg-orange-100 shadow dark:bg-orange-950 mt-11">
          <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-orange-900 sm:text-center dark:text-orange-400"><a href="https://github.com/Shagnikpaul/" class="hover:underline">Developed by Shagnik Paul</a>.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-orange-900 dark:text-orange-400 sm:mt-0">
              <li>
                  <a target='_blank' href="https://github.com/Shagnikpaul/helios" class="mr-4 hover:underline md:mr-6 ">Project GitHub Page</a>
              </li>
          </ul>
          </div>
      </footer>
    </div>
  )
};

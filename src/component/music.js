import React from 'react'

export default function Music() {
    return (
        <div className="dark:bg-black">
        <div class="w-full">
    <div class='flex w-8/12  bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
        <div class="flex flex-col w-full">
            <div class="flex p-5 border-b">
                <img class='w-20 h-20 object-cover' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'/>
                <div class="flex flex-col px-2 w-full">
                    <span class="text-xs text-gray-700 uppercase font-medium ">
                        now playing
                    </span>
                    <span class="text-sm text-green-500 capitalize font-semibold pt-1">
                       I think I need a sunrise, I'm tired of the sunset    
                    </span>
                    <span class="text-xs text-gray-500 uppercase font-medium ">
                        -"Boston," Augustana
                    </span>
                    <div class="flex justify-end">
                        
                    </div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center p-5">
                <div class="flex items-center">
                    <div class="flex space-x-3 p-2">
        <button class="focus:outline-none">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
        </button>
        <button class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-red-400 focus:outline-none">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
        <button class="focus:outline-none">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
        </button>
      </div>
                </div>
                <div class="relative w-full sm:w-1/2 md:w-7/12 lg:w-4/6 ml-2">
                    <div class="bg-green-300 h-2 w-full rounded-lg"></div>
                     <div class="bg-green-500 h-2 w-1/2 rounded-lg absolute top-0"></div>
        
                </div>
                <div class="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
<span class="text-xs text-gray-700 uppercase font-medium pl-2">
                    02:00/04:00                   
                </span>
                </div>
                
            </div>
</div> </div></div></div>
    )
}

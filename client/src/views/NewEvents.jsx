import React from 'react'

export default function NewEvents() {
  return (
	
	  
	  <section className="dark:bg-gray-800 h-screen dark:text-gray-100">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
    
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Celebrating the Coronation at the British Museum</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Join us to celebrate the Coronation of His Majesty The King and Her Majesty The Queen.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Event Information</h3>
				<p className="mt-3 text-lg dark:text-gray-400">Festivals & special events / Family activity</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						 <div className="flex-shrink-0"> 
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="./images/calender1.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div> 
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Date & Time</h4>
							<p className="mt-2 dark:text-gray-400">15-05-2023 at 3pm.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50"> Location</h4>
							<p className="mt-2 dark:text-gray-400">Great Court and front lawn.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Age limit</h4>
							<p className="mt-2 dark:text-gray-400">Suitable for all ages.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="./images/mu1.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 " />
			</div>

            {/* <div class="w-full h-screen flex justify-center items-center"> */}
            <button 
        type="button" 
        class="text-lg font-medium py-2 px-4 dark:bg-violet-400 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex  flex flex-col items-center justify-center w-26"
    >
    
        <span class="ml-15">Book Now</span>
    </button>
		{/* </div> */}
        </div>



    
    </div>
      <div></div>
     

     <div></div>
</section>
	
  )
}
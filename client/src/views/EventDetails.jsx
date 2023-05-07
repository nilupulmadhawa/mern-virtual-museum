import React from 'react'

export default function EventDetails() {
  return (
	<div>
	<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src="./images/mu1.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Celebrating the Coronation at the British Museum</h3>
				<span className="text-xs dark:text-gray-400">May 7, 2023</span>
				<p>Join us to celebrate the Coronation of His Majesty The King and Her Majesty The Queen.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./images/mu2.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In Praise of Painting: Dutch Masterpieces at The Met</h3>
					<span className="text-xs dark:text-gray-400">May 10, 2023</span>
					<p>The exhibition provides a fresh perspective on the canon and parameters of the Dutch Golden Age by uniting paintings from Benjamin Altman's bequest, the Robert Lehman Collection, and the Jack and Belle Linsky Collection.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./images/mu3.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Learning to Paint in Premodern China</h3>
					<span className="text-xs dark:text-gray-400">May 12, 2023</span>
					<p>This exhibition will consider the underexplored question of how painters learned their craft in premodern China. Some painters learned at home, from fathers, mothers, or other relatives among whom painting was a shared language of familial communication.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./images/mu4.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Egyptian hieroglyphs : unlock the mystery</h3>
					<span className="text-xs dark:text-gray-400">May 14, 2023</span>
					<p>The family friendly touring exhibition incorporates interactive elements to tell the story. It introduces visitors to great pioneers like Jean-Francois Champollion, who undertook revolutionary work on deciphering the ancient Egyptian language.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./images/mu5.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Ancient Egyptians : secrets of the afterlife</h3>
					<span className="text-xs dark:text-gray-400">May 16, 2023</span>
					<p>Perfect for the whole family, this exhibition offers a fascinating insight into how the ancient Egyptians prepared for the afterlife. Shaped by contributions from local Middlesbrough school children learning about ancient Egypt.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./images/mu6.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Human image: masterpieces of figurative art</h3>
					<span className="text-xs dark:text-gray-400">May 18, 2023</span>
					<p>This compelling exhibition comprises a superb and highly varied selection of human images from the collection of the British Museum. Many are charged with complex symbolism.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./images/mu7.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Feminine power the divine to the demonic</h3>
					<span className="text-xs dark:text-gray-400">May 20, 2023</span>
					<p>The first exhibition of its kind, Feminine power took a cross-cultural look at the profound influence of female spiritual beings within global religion and faith.</p>
				</div>
			</a>
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>


    </div>
  )
}





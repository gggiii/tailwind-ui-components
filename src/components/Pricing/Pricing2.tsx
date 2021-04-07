const Pricing2 = () => {
	return (
		<div className="bg-gray-200 py-10">
			<div className="text-center">
				<span className="block text-3xl font-bold text-dark lg:text-4xl">
					Simple no-tricks pricing
				</span>
				<span className="text-gray-700 mt-4 mb-6 block w-9/12 mx-auto lg:text-xl lg:mb-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eaque doloribus, optio, adipisci, porro tempore dignissimos
				</span>
			</div>
			<div className="flex mx-10 flex-wrap shadow-xl rounded-xl md:flex-nowrap md:mt-8 lg:mx-24">
				<div className="w-full bg-white p-10 rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:p-12 lg:p-16">
					<span className="block text-2xl font-bold text-gray-800 lg:text-3xl">
						Lifetime membership
					</span>
					<span className="block text-gray-500 mt-3 lg:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate eaque dolorem sint adipisicing elit.
					</span>

					<div className="relative my-6 lg:mt-8 ">
						<span className="uppercase text-gray-700 font-bold inline-block bg-white pr-6 relative z-10">
							what's included
						</span>
						<div className="h-px bg-gray-200 absolute w-full top-1/2"></div>
					</div>
					<div className="flex flex-wrap gap-y-4">
						{[1, 1, 1, 1].map((e) => {
							return (
								<div className="flex w-1/2 items-center gap-2 lg:gap-4">
									<svg
										className="w-4 h-4 "
										fill="#7E0CC0"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="text-gray-600 text-base">
										Lorem ipsum dolor
									</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className="bg-primary w-full p-6 lg:px-0 rounded-b-2xl text-center md:rounded-bl-none md:rounded-r-2xl md:flex md:content-center md:flex-wrap md:w-auto">
					<span className="block text-white text-opacity-90 w-full">
						Pay once, own it forever
					</span>
					<span className="text-5xl block text-white font-bold my-2 w-full">
						$556
					</span>
					<a
						className="text-white text-opacity-70 underline hover:text-opacity-100 block w-full"
						href="http://google.com"
					>
						Learn about our membership policy
					</a>
					<button className="bg-white py-3 px-6 rounded-md text-primary shadow-xl mx-auto inline-block mt-5 focus:outline-none focus:ring focus:ring-primary-lighter2 hover:bg-primary-lighter3">
						Get access
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pricing2;

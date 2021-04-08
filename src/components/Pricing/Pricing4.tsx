const Pricing3 = () => {
	return (
		<div className="bg-dark py-10 relative">
			<span className="block text-center uppercase text-white text-opacity-70 mb-2 md:mb-0">
				pricing
			</span>
			<span className="block text-center text-white text-4xl px-20 font-bold lg:text-5xl lg:mt-2 ">
				The right price for you, whoever you are
			</span>
			<span className="block text-center text-white text-xl px-10 font-light my-6 lg:mb-12">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Suscipit, cum ratione expedita labore, porro molestias minus
			</span>
			<div className="flex flex-wrap px-10 mt-10 md:flex-nowrap md:px-10 lg:px-48 z-10 relative md:justify-between md:gap-12">
				{/* OPTION 1 */}
				{[1, 1].map((e) => {
					return (
						<div className="w-full bg-white  rounded-2xl lg:flex-1 shadow-xl mb-6">
							<span className="uppercase inline-block text-xl mb-4 mt-8 bg-primary-lighter3 px-8 rounded-full py-1 text-primary ml-12">
								hobby
							</span>
							<div className="flex justify-start mb-4  pl-12">
								<span className="text-4xl mt-1 block mr-1 text-primary lg:text-5xl lg:mt-3">
									$
								</span>
								<span className="text-6xl font-bold text-primary lg:text-8xl">
									79
								</span>
								<span className="block self-center text-2xl text-gray-400 ml-2 lg:text-3xl">
									/mo
								</span>
							</div>
							<p className="text-gray-500 px-12 mb-8 text-xl">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ex eius sint asperiores
								voluptas
							</p>
							<div className="bg-gray-100 border-t-2 border-gray-400 border-opacity-40 px-10 py-8 rounded-b-2xl">
								{[1, 1, 1].map((e) => {
									return (
										<div className="flex py-2 gap-4">
											<svg
												className="w-6 h-6"
												fill="green"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
											<div className="text-gray-700">
												Lorem ipsum, dolor sit amet
												consectetur
											</div>
										</div>
									);
								})}
								<div className="flex justify-center">
									<a
										className="bg-primary rounded-xl text-white shadow-xl py-3 px-6 text-xl mt-6 inline-block mx-auto w-full text-center focus:ring focus:ring-primary-lighter2 hover:ring hover:ring-primary-lighter2 hover:bg-primary-darker"
										href="http://google.com"
									>
										Start your free trial
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="absolute bg-gray-50 bottom-0 w-full h-96"></div>
			<div className="relative z-10 mx-10 bg-gray-200 p-10 rounded-2xl lg:mx-48">
				<span className="bg-white rounded-full py-2 px-6">
					DISCOUNTED
				</span>
				<div className="flex flex-wrap md:flex-nowrap md:items-center md:gap-10">
					<span className="mt-6 text-gray-600 flex-1 lg:text-xl">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Magni voluptatum dolor perferendis for <b>20€</b>
					</span>
					<button className="bg-white px-10 py-3 rounded-md text-xl mt-6 text-primary shadow-md whitespace-nowrap">
						Buy discounted license

					</button>
				</div>
			</div>
		</div>
	);
};

export default Pricing3;

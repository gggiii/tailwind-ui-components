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
			<div className="flex flex-wrap px-20 mt-10 md:flex-nowrap md:items-center md:px-10 lg:px-24 z-10 relative">
				{/* OPTION 1 */}
				<div className="w-full bg-white  rounded-2xl lg:w-4/12 md:rounded-r-none">
					<span className="uppercase block text-center text-2xl mb-4 mt-8">
						hobby
					</span>
					<div className="flex justify-center mb-8">
						<span className="text-4xl mt-1 block mr-1 text-primary">
							$
						</span>
						<span className="text-6xl font-bold text-primary">
							79
						</span>
						<span className="block self-center text-2xl text-gray-400 ml-2">
							/mo
						</span>
					</div>
					<div className="bg-gray-200 border-t-2 border-gray-400 border-opacity-40 px-10 py-8 rounded-b-2xl md:rounded-r-none">
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
										Lorem ipsum, dolor sit amet consectetur
									</div>
								</div>
							);
						})}
						<div className="flex justify-center">
							<a
								className="bg-white rounded-xl text-primary shadow-xl py-3 px-6 text-xl mt-6 inline-block mx-auto w-auto focus:ring focus:ring-primary-lighter2 hover:ring hover:ring-primary-lighter2"
								href="http://google.com"
							>
								Start your free trial
							</a>
						</div>
					</div>
				</div>
				{/* OPTION 2 */}
				<div className="w-full bg-white rounded-2xl my-8 ring-primary ring relative lg:flex-1">
					<div className="flex justify-center">
						<span className="uppercase rounded-full bg-primary inline-block absolute transform -translate-y-1/2 text-white px-5 py-1 mx-auto">
							most popular
						</span>
					</div>
					<div className="">
						<span className="uppercase block text-center text-2xl mb-4 mt-8 lg:mt-10">
							growth
						</span>
						<div className="flex justify-center mb-8">
							<span className="text-4xl mt-1 block mr-1 text-primary">
								$
							</span>
							<span className="text-6xl font-bold text-primary">
								123
							</span>
							<span className="block self-center text-2xl text-gray-400 ml-2">
								/mo
							</span>
						</div>
						<div className="bg-gray-200 border-t-2 border-gray-400 border-opacity-40 px-10 py-8 rounded-b-2xl lg:pb-12">

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
										<div className="text-gray-700 md:text-xl">
											Lorem ipsum, dolor sit amet
											consectetur
										</div>
									</div>
								);
							})}
							<div className="flex justify-center">
								<a
									className="bg-primary rounded-xl text-white shadow-xl py-3 px-8 text-xl mt-6 inline-block mx-auto w-auto focus:ring focus:ring-primary-lighter2 lg:w-full text-center hover:bg-white transition-all hover:text-primary hover:ring hover:ring-primary-lighter2"
									href="http://google.com"
								>
									Start your free trial
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* OPTION 3 */}
				<div className="w-full bg-white  rounded-2xl lg:w-4/12 md:rounded-l-none">
					<div className="">
						<span className="uppercase block text-center text-2xl mb-4 mt-8">
							scale
						</span>
						<div className="flex justify-center mb-8">
							<span className="text-4xl mt-1 block mr-1 text-primary">
								$
							</span>
							<span className="text-6xl font-bold text-primary">
								321
							</span>
							<span className="block self-center text-2xl text-gray-400 ml-2">
								/mo
							</span>
						</div>
						<div className="bg-gray-200 border-t-2 border-gray-400 border-opacity-40 px-10 py-8 rounded-b-2xl  md:rounded-l-none">
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
									className="bg-white rounded-xl text-primary shadow-xl py-3 px-6 text-xl mt-6 inline-block mx-auto w-auto focus:ring focus:ring-primary-lighter2 hover:ring hover:ring-primary-lighter2"
									href="http://google.com"
								>
									Start your free trial
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bg-gray-50 bottom-0 w-full h-64"></div>
		</div>
	);
};

export default Pricing3;

const Feature1 = () => {
	return (
		<div className="px-10 py-14 md:px-24 lg:px-40 lg:pb-24">
			<p className="text-4xl font-bold mb-2 text-primary lg:text-center lg:mb-5">Lorem ipsum dolor site</p>
			<p className="text-gray-600 text-xl lg:text-center lg:max-w-3xl lg:mx-auto ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
				impedit eos dicta odio cum aperiam earum velit quae itaque amet
				aliquid autem
			</p>
			<div className="space-y-5 mt-6 block md:flex md:flex-wrap md:space-y-0 md:gap-y-12 md:justify-between md:mt-10 lg:mt-14 lg:gap-x-0">
				{[1, 1, 1, 1].map((e) => {
					return (
						<div className="flex md:w-1/2">
							<svg
								className="w-12 h-12 text-white bg-primary p-2 rounded-md"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
								></path>
							</svg>
							<div className="flex-1 pl-4">
								<p className="text-xl text-dark">Lorem ipsum dolor site amet</p>
								<p className="text-gray-500 lg:max-w-xl md:w-11/12">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Totam, cumque tenetur.
									Sunt eum blanditiis non? Unde voluptatum
									suscipit consequatur quas explicabo ad
									deleniti
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Feature1;

const Feature5 = () => {
	return (
		<div className="pt-8 lg:pb-24 pb-14 md:pt-12 ">
			<p className=" px-10 md:pl-10 lg:px-40 text-4xl font-bold mb-2 text-primary lg:text-center lg:mb-5">
				Lorem ipsum dolor site
			</p>
			<p className="text-gray-600 text-xl lg:text-center lg:max-w-3xl lg:mx-auto px-10 md:px-10 lg:pb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
				impedit eos dicta odio cum aperiam earum velit quae itaque amet
				aliquid autem
			</p>
			{[1, 1].map((e) => {
				return (
					<div className="flex px-10 md:px-10 mt-4 md:mt-16 gap-12 lg:mt-14 lg:px-24 flex-wrap md:flex-nowrap justify-center">
						{[1, 1, 1].map((e) => {
							return (
								<div className="flex w-2/3 gap-2 md:w-1/2 lg:flex-1 bg-gray-100 relative px-10 pb-10 pt-12 rounded-xl">
									<svg
										className="w-12 h-12 text-white bg-primary p-1 rounded absolute left-1/2 -translate-x-1/2 transform top-0 -translate-y-1/2 shadow-xl"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										></path>
									</svg>
									<div className="flex-1">
										<span className="text-xl text-center w-full inline-block mb-4">
											Lorem ipsum dolor
										</span>
										<p className="text-gray-600 text-base text-center">
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit.
											Quidem, minima recusandae nisi
											exercitationem sed
										</p>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Feature5;

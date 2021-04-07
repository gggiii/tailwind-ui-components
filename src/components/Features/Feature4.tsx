const Feature4 = () => {
	return (
		<div className="pt-8 lg:pb-24 pb-14 md:pt-12 lg:flex  lg:px-24">
			<div className=" lg:w-1/3  px-10 md:pl-10  ">
				<span className="text-dark text-xl ">EVERYTHING YOU NEED</span>

				<p className="text-4xl font-bold mb-2 text-primary lg:mb-2">
					Lorem ipsum dolor site
				</p>
				<p className="text-gray-600 text-xl lg:max-w-3xl lg:mx-auto md:text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Minima impedit eos dicta odio cum aperiam earum velit quae
					itaque amet aliquid autem
				</p>
			</div>
			<div className="flex flex-wrap px-10 md:px-10 mt-4 md:mt-6 gap-y-4 lg:gap-y-8 lg:mt-0 lg:flex-1">
				{[1, 1, 1, 1, 1, 1, 1, 1].map((e) => {
					return (
						<div className="flex w-full gap-2 md:w-1/2 lg:w-1/2">
							<svg
								className="w-8 h-8 text-primary"
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
								<span className="text-xl">
									Lorem ipsum dolor
								</span>
								<p className="text-gray-500 text-sm md:w-11/12 lg:text-base">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Quidem, minima recusandae
									nisi exercitationem sed, aut vitae magnam
									architecto temporibus maxime
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Feature4;

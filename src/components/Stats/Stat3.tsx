const stat3 = () => {
	return (
		<div className="flex flex-wrap md:flex-nowrap ">
			<div className="w-full self-stretch">
				<img
					className="h-full w-full object-cover object-left"
					src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
					alt="Stock"
				/>
			</div>
			<div className="py-10 px-10 lg:px-20 flex items-center">
				<div>
					<svg
						className="w-12 h-12 text-white bg-primary p-2 rounded-md"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
							clipRule="evenodd"
						></path>
					</svg>
					<span className="text-4xl block font-bold my-4 lg:text-5xl lg:mt-10 ">
						Deliver what your customers want every time
					</span>
					<span className="text-xl text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ut temporibus ex, neque ullam architecto quo fugiat
						nesciunt consequatur. Explicabo iure a rem quas ullam
						possimus obcaecati quae ab! Explicabo, molestias!
					</span>
					<div className="flex gap-8 mt-6 lg:mt-10">
						{[1, 1, 1].map((e) => {
							return (
								<div className="">
									<span className="block text-5xl font-bold text-primary">
										24/7
									</span>
									<span className="text-xl text-gray-500 mt-1 block">
										Peperoni
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default stat3;

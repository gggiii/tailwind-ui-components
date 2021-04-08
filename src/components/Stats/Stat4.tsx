const stat4 = () => {
	return (
		<div className="flex flex-wrap md:flex-nowrap bg-dark">
			<div className="px-10 py-10 md:flex-1 md:py-20 lg:px-24 lg:py-24">
				<span className="text-gray-300 block">VALUABLE METRICS</span>
				<span className="text-white text-3xl font-bold block my-1 lg:text-5xl">
					Get actionable data that will help growr your business.
				</span>
				<p className="block text-gray-400 mt-4 lg:text-xl">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Mollitia, minima officiis soluta natus explicabo est placeat
					cupiditate ipsa dolorum, libero hic distinctio vero
					consequuntur rerum ad. Rem id exercitationem veniam.
				</p>
				<div className="flex flex-wrap mt-6 gap-y-8 lg:gap-y-10 lg:mt-14">
					{[1, 1, 1, 1].map((e) => {
						return (
							<div className="w-1/2">
								<span className="text-white text-4xl block lg:text-5xl font-bold">
									8k+
								</span>
								<span className="text-white text-opacity-60 md:w-11/12 block lg:text-xl lg:w-8/12">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className=" relative h-60 md:self-stretch md:h-auto md:w-1/3 lg:w-2/5">
				<img
					className="filter grayscale opacity-20 h-full w-full object-cover object-center"
					src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
					alt="Stock"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark md:bg-gradient-to-r "></div>
			</div>
		</div>
	);
};

export default stat4;

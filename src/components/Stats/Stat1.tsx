const stats1 = () => {
	return (
		<div className="px-10 py-10 text-center bg-gray-100 relative">
			<span className="text-dark text-4xl block font-bold  text-center lg:text-5xl lg:mb-6">
				Trusted by developers from over 80 planets
			</span>
			<span className="text-xl text-center block mt-4 text-gray-500">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
				deserunt aspernatur quibusdam voluptate atque dolorem quos ab
			</span>
			<div className="shadow-xl flex mx-auto divide-y md:divide-y-0 md:divide-x mt-6 md:w-auto md:inline-flex rounded-xl bg-white md:mb-10 lg:mt-10 z-10 relative md:flex-nowrap flex-wrap" >
				{[1, 1, 1].map((e) => {
					return (
                        <div className="md:flex-1 text-center p-8 md:px-20 w-full">
                            <span className="text-5xl block font-bold text-primary mb-2">100%</span>
                            <span className="text-xl  text-gray-400">Peperoni</span>
                        </div>
                    )
				})}
			</div>
            <div className="absolute bg-white w-full h-1/3 bottom-0 left-0">
            </div>
		</div>
	);
};

export default stats1;

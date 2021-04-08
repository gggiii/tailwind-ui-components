const stats2 = () => {
	return (
		<div className="px-10 py-10 text-center bg-primary relative">
			<span className="text-white text-4xl block font-bold  text-center lg:text-5xl lg:mb-6">
				Trusted by developers from over 80 planets
			</span>
			<span className="text-xl text-center block mt-4 text-white text-opacity-60">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
				deserunt aspernatur quibusdam voluptate atque dolorem quos ab
			</span>
			<div className="flex mx-auto mt-6 md:w-auto md:inline-flex rounded-xl md:mb-10 lg:mt-5 z-10 relative " >
				{[1, 1, 1].map((e) => {
					return (
                        <div className="md:flex-1 text-center py-8 md:px-20 w-full">
                            <span className="text-5xl block font-bold text-white mb-2">100%</span>
                            <span className="text-xl  text-white text-opacity-60">Peperoni</span>
                        </div>
                    )
				})}
			</div>
          
		</div>
	);
};

export default stats2;

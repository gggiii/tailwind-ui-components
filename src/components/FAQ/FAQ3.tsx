const faq3 = () => {
	return (
		<div className="p-16 bg-gray-100 lg:px-48">
			<span className="text-3xl block mb-4 font-bold lg:text-4xl lg:text-center">
				Frequently asked questions
			</span>

			<div className="flex flex-wrap space-y-8 mt-8 md:space-y-0 md:gap-y-12 lg:mt-10">
				{[1, 1, 1, 1, 1, 1].map((e) => {
					return (
						<div className="w-full md:w-1/2 lg:w-1/3">
							<span className="text-xl text-dark mb-1 block">
								Why are you gay?
							</span>
							<p className="text-gray-400 md:w-10/12">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eum harum odit, autem,
								reprehenderit in ipsum laudantium obcaecati
								impedit aut nam similique? Quo itaque ab, autem
								rerum impedit nobis! Nam, amet?
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default faq3;

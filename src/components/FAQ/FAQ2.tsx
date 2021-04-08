const faq2 = () => {
	return (
		<div className="p-16 bg-gray-100 flex flex-wrap lg:flex-nowrap lg:gap-10 lg:px-48">
			<div className="w-full">
				<span className="text-3xl block mb-4 font-bold lg:text-4xl">
					Frequently asked questions
				</span>
				<span className="text-gray-500 text-xl block max-w-md">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Corrupti maiores{" "}
					<a
						className="text-primary hover:underline"
						href="http://google.com"
					>
						Customer support
					</a>{" "}
					aperiam quibusdam iste
				</span>
			</div>
			<div className="flex flex-wrap space-y-8 mt-6 md:space-y-0 md:gap-y-10 lg:mt-0">
				{[1, 1, 1, 1].map((e) => {
					return (
						<div className="w-full md:w-1/2 lg:w-full">
							<span className="text-xl text-dark mb-1 block">Why are you gay?</span>
							<p className="text-gray-400 md:w-11/12">
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

export default faq2;

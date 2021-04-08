const faq1 = () => {
	return (
		<div className="p-10 bg-gray-100 md:px-20">
			<span className="text-3xl font-bold text-center block text-gray-800 mb-8 lg:text-4xl lg:mb-10">
				Frequently asked questions
			</span>
			<div className="divide-y border-t lg:max-w-3xl mx-auto">
				{[1, 1, 1, 1, 1].map((e) => {
					return (
						<details className="focus:outline-nones" >
							<summary className="cursor-pointer p-6 flex justify-between mx-2 focus:outline-none">
								<span className="text-xl text-dark">Why are you gay?</span>
								<span className="text-gray-500">
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</span>
							</summary>
							<div className="px-8 pb-6 text-gray-500 -mt-4">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Possimus ducimus veritatis
								pariatur maxime qui delectus suscipit omnis
								quasi hic, reiciendis, ab veniam numquam earum
								iste tempora eaque dolores similique
								consectetur.
							</div>
						</details>
					);
				})}
			</div>
		</div>
	);
};

export default faq1;

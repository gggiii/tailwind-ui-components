const cta5 = () => {
	return (
		<div className="flex flex-wrap bg-primary md:flex-nowrap ">
			<img
                className="w-full md:w-1/2 lg:h-96 object-cover object-left"
				src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
				alt="Stock"
			/>

			<div className="flex-1 px-10 py-10 lg:pt-16 lg:px-16">
				<span className="block text-white text-opacity-80 lg:text-xl ">
					AWWARD WINNING SUPPORT
				</span>
				<span className="block text-3xl font-bold text-white lg:text-4xl my-2">
					Were here to help
				</span>
				<p className="text-white text-opacity-70 mt-1">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Veniam aut laborum et, in animi, corrupti ad perspiciatis
					similique voluptatum aliquid labore cum quisquam, quas
					consectetur? Ipsam vitae velit ratione reiciendis.
				</p>
				<button className="flex items-center bg-white text-primary px-6 py-3 rounded-md mt-4 focus:outline-none hover:bg-primary-lighter3 focus:ring focus:ring-primary-lighter2 lg:mt-8">
					View our page{" "}
					<svg
						className="w-5 h-5 ml-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default cta5;

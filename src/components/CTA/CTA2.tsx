const cta2 = () => {
	return (
		<div className="bg-primary flex flex-wrap-reverse justify-end pt-0 md:pt-10 pb-10 md:pb-10 md:flex-nowrap">
			<div className="w-full px-10 lg:px-24 lg:pt-8">
				<p className="text-white font-bold text-4xl mb-2 lg:text-5xl">
					Ready to drive in?
					<br />
					Start your free trial today
				</p>
				<p className="text-white text-opacity-70 lg:text-xl">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Blanditiis, consequuntur. Exercitationem ipsa, consequuntur
				</p>
				<button className="shadow-md focus:outline-none focus:ring focus:ring-primary-lighter2s bg-white text-primary px-6 py-3 rounded-md hover:bg-primary-lighter3 mt-6 md:mb-4">
					Get Started
				</button>
			</div>
			<div className="w-full">
				<img 
                className="w-9/12 ml-auto rounded-bl-2xl  md:rounded-tl-2xl mb-8 md:w-full md:h-full object-cover object-right lg:w-10/12 lg:h-96"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" alt="Stock"/>
			</div>
		</div>
	);
};

export default cta2;

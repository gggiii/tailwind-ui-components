const cta1 = () => {
	return (
		<div className="bg-gray-200 flex flex-wrap justify-end py-10 md:flex-nowrap">
			<div className="w-full px-10 font-bold text-4xl lg:px-24">
				<p className="text-dark ">Ready to drive in?</p>
				<p className="text-primary">Start your free trial today</p>
			</div>
			<div className="w-full px-10 mt-4 flex gap-4 md:justify-end md:items-center lg:px-24">
                <button className="shadow-md focus:outline-none focus:ring focus:ring-primary-lighter3 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-lighter">Sign up</button>
                <button className="shadow-md focus:outline-none focus:ring focus:ring-primary bg-white text-primary px-6 py-3 rounded-md hover:bg-primary-lighter3">Get Started</button>
            </div>
		</div>
	);
};

export default cta1;

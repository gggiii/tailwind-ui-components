const news4 = () => {
	return (
		<div className="px-10 py-10 lg:px-20 bg-primary flex lg:items-center lg:content-center flex-wrap lg:flex-nowrap lg:gap-10 lg:py-16 m-10 rounded-2xl shadow-xl">
			<div className="text-3xl font-bold block mb-6 lg:text-5xl lg:mb-8 w-full text-white">
				Want our product news and updates?
				<span className="text-white text-opacity-40 block text-xl font-normal mt-3 lg:text-2xl">
					Stay up to date and sign up
				</span>
			</div>

			<form
				action="#"
				className="flex gap-4 md:justify-start md:justify-items-start items-center"
			>
				<input
					type="text"
					placeholder="Enter your email"
					className="inline-block rounded-md border py-3 px-5 text-xl border-gray-300 flex-1 md:flex-none md:w-96 focus:outline-none  focus:ring focus:ring-primary-lighter3"
				/>

				<button
					type="submit"
					className="bg-primary-lighter2 text-white py-3 px-6 rounded-xl text-xl hover:bg-primary-lighter focus:outline-none focus:ring focus:ring-primary-lighter3 whitespace-nowrap"
				>
					Notify me
				</button>
				
			</form>
		</div>
	);
};
export default news4;

const news1 = () => {
	return (
		<div className="px-10 py-10 lg:px-48">
			<div className="text-3xl font-bold block mb-6 lg:text-4xl lg:mb-8">
				Want our product news and updates?
				<span className=" text-primary block">
					Sign up or our newsletter.
				</span>
			</div>

			<form
				action="#"
				className="flex gap-4 md:justify-start md:justify-items-start"
			>
				<input
					type="text"
					placeholder="Enter your email"
					className="inline-block rounded-xl border py-3 px-5 text-xl border-gray-300 flex-1 md:flex-none md:w-96 focus:outline-none"
				/>

				<button
					type="submit"
					className="bg-primary text-white py-3 px-6 rounded-xl text-xl hover:bg-primary-lighter focus:outline-none focus:ring focus:ring-primary-lighter3"
				>
					Notify me
				</button>
			</form>
		</div>
	);
};
export default news1;

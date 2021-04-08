const news3 = () => {
	return (
		<div className="text-center bg-primary px-10 py-12 md:pt-20 md:pb-28">
			<span className="text-white text-3xl font-bold block md:text-4xl lg:text-5xl">Get notified when we're launching.</span>
			<span className="text-white text-opacity-70 text-xl block pt-3 pb-8 md:max-w-xl m-auto md:pt-5 md:pb-10 lg:mt-2 lg:text-2xl font-light">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
				omnis ullam assumenda voluptatem sed. Dolores odit magni
			</span>
			<form
				action="#"
				className="flex gap-4 justify-center items-center mx-auto "
			>
				<input
					type="text"
					placeholder="Enter your email"
					className="inline-block rounded-md border py-3 px-5 text-xl border-gray-300  md:flex-none md:w-96 focus:outline-none  focus:ring focus:ring-primary-lighter3"
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

export default news3;

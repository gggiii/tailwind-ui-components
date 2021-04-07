import { useState } from "react";

const Pricing1 = () => {
	const [monthly, setMonthly] = useState(true);
	return (
		<div className="py-10 px-10 md:text-center">
			
			<span className="text-3xl font-bold text-center block text-dark md:text-4xl">
				Pricing plans
			</span>
			<p className="text-center text-gray-500 mt-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Laborum magnam tempora quod veritatis eius eaque.
			</p>
			<div className="bg-gray-200 flex gap-3 p-1 rounded-md mt-5 md:inline-block md:mx-auto ">
				<button
					onClick={(e) => {
						setMonthly(true);
					}}
					className={
						(monthly ? "bg-white " : "") +
						" flex-1 rounded-md py-2 focus:outline-none px-10"
					}
				>
					Monthly billing
				</button>
				<button
					onClick={(e) => {
						setMonthly(false);
					}}
					className={
						(!monthly ? "bg-white " : "") +
						" flex-1 rounded-md py-2 focus:outline-none px-10"
					}
				>
					Yearly billing
				</button>
			</div>
			<div className="flex flex-wrap gap-4 mt-6 md:gap-y-14 lg:gap-8">
				{[1, 1, 1, 1].map((e) => {
					return (
						<div className="w-full border border-gray-300 rounded-xl  md:w-5/12 child lg:flex-1 mx-auto text-left" >
							<div className="p-6">
								<span className="block text-dark text-xl">
									Hobby
								</span>
								<span className="text-gray-500 text-sm block my-2">
									All the basic stuff for your needs
								</span>
								<div>
									<span className="text-5xl font-bold text-primary inline-block mr-1">
										{monthly ? "$10" : "$100"}
									</span>
									<span className="text-2xl text-gray-400">
										{monthly ? "/mo" : "/year"}
									</span>
								</div>
								<button className="w-full block bg-primary text-white rounded-xl py-3 text-base mt-5 focus:outline-none hover:bg-primary-lighter">
									Buy Hobby
								</button>
							</div>
							<div className="border-t px-6 pt-4 pb-8">
								{[1, 1, 1].map((e) => {
									return (
										<div className="flex gap-3 py-2">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="green"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												></path>
											</svg>
											<p className="flex-1 text-gray-700">
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
											</p>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Pricing1;

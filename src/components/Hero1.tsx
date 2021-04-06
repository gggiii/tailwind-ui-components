import { useState } from "react";
const navLinkStyle =
	"text-xl text-gray-600  hover:text-gray-800 md:w-auto w-full md:text-left text-center";
const navLinkStyleAccent =
	"text-xl text-primary  md:w-auto w-full md:text-left text-center";

const Hero1 = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(true);
	return (
		<div className="flex lg:h-screen flex-wrap md:h-auto overflow-x-hidden h-screen md:items-start">
			<div className="lg:w-6/12 px-10 md:px-24 md:w-full relative">
				<div className="flex items-center py-10 gap-14 justify-between lg:justify-start ">
					<a href="http://google.com">
						<img
							className="w-12 h-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
							alt="Logo"
						/>
					</a>

					<div
						className={
							"gap-8 md:gap-14 absolute md:relative flex bg-white w-screen md:w-auto flex-wrap top-0 transition-all duration-500 md:left-0 md:h-auto h-screen md:py-0 content-center md:flex-nowrap " +
							(mobileMenuVisible ? "left-0" : "left-full")
						}
					>
						<button
							onClick={(e) => {
								setMobileMenuVisible(false);
							}}
							className="md:hidden text-right w-auto ml-auto pr-10 absolute right-5 top-5 focus:outline-none"
						>
							<svg
								className="w-6 h-6 inline"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
						<a className={navLinkStyle} href="http://google.com">
							Product
						</a>
						<a className={navLinkStyle} href="http://google.com">
							Features
						</a>
						<a className={navLinkStyle} href="http://google.com">
							Market
						</a>
						<a
							className={navLinkStyleAccent}
							href="http://google.com"
						>
							Login
						</a>
					</div>
					<button
						onClick={(e) => {
							setMobileMenuVisible(true);
						}}
						className="lg:hidden md:hidden text-gray-500 focus:outline-none"
					>
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
				<div className="lg:mt-56 md:my-20 lg:text-left md:text-center my-16">
					<h1 className="lg:text-7xl md:text-5xl font-bold text-gray-800 mb-6 text-4xl">
						Lorem ipsum dolor sit
						<br />
						<span className="text-primary">amet consectetur</span>
					</h1>
					<h2 className="text-xl text-gray-500 mb-8 max-w-3xl">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Porro quaerat, maiores odit quasi, voluptatibus
						maxime praesentium explicabo mollitia ea, dolore eveniet
						nisi assumenda accusantium at?
					</h2>
					<div className="flex gap-6 md:justify-center lg:justify-start">
						<button className="bg-primary text-white text-xl px-10 py-4 rounded-xl shadow-md hover:bg-primary-darker flex items-center focus:outline-none focus:ring ring-primary-lighter2">
							Lorem ipsum
						</button>
						<button className="bg-primary-lighter3 text-primary text-xl px-10 py-4 rounded-xl shadow-md hover:bg-primary-lighter2 hover:text-white flex items-center focus:outline-none focus:ring ring-primary-lighter">
							Site amet
						</button>
					</div>
				</div>
			</div>
			<div className="lg:flex-1 md:flex-none flex-1 lg:h-screen">
				<img
					className="lg:w-full lg:h-full md:w-screen md:h-96 object-cover object-right lg:hero-1-image h-full w-full"
					src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
					alt="Stock"
				/>
			</div>
		</div>
	);
};
export default Hero1;

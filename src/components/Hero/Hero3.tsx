import { useState } from "react";
const navLinkStyle =
	"text-xl text-gray-600  hover:text-gray-800 md:w-auto w-full md:text-left text-center";

const Hero3 = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(true);
	return (
		<div className="lg:h-screen md:h-auto overflow-x-hidden h-screen bg-gray-100">
			<div className="w-full relative h-full flex flex-col ">
				<div className="flex items-center px-10 md:px-24 py-10 gap-14 bg-white ">
					<img
						className="w-12 h-auto"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt="Logo"
					/>

					<div
						className={
							" gap-8 md:gap-14 absolute md:relative flex w-screen md:w-auto flex-wrap top-0 transition-all duration-500 md:h-auto h-screen md:py-0 content-center md:flex-nowrap bg-white md:bg-opacity-0 lg:mx-auto md:left-0 md:items-center flex-1 " +
							(mobileMenuVisible ? " left-0" : " left-full")
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
						<a className={navLinkStyle} href="http:/google.com">
							Product
						</a>
						<a className={navLinkStyle} href="http:/google.com">
							Features
						</a>
						<a className={navLinkStyle} href="http:/google.com">
							Market
						</a>
						<a
							className="text-xl text-primary  md:w-auto w-full md:text-left text-center bg-white px-5 py-3 rounded-md md:shadow hover:bg-primary hover:text-white shadow-none md:ml-auto"
							href="http:/google.com"
						>
							Login
						</a>
					</div>

					<button
						onClick={(e) => {
							setMobileMenuVisible(true);
						}}
						className="lg:hidden md:hidden text-gray-500 focus:outline-none ml-auto"
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
				<div className="flex lg:flex-nowrap flex-wrap">
					<div className="lg:w-1/2 w-full lg:mt-52 md:my-20 my-24 px-10 md:px-24 ">
						<h1 className="lg:text-7xl md:text-5xl font-bold text-gray-800 mb-6 text-4xl">
							Lorem ipsum dolor sit
							<br />
							<span className="text-primary">
								amet consectetur
							</span>
						</h1>
						<h2 className="text-xl text-gray-500 mb-8 ">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Porro quaerat, maiores odit quasi,
							voluptatibus maxime praesentium explicabo mollitia
							ea, dolore eveniet nisi assumenda accusantium at?
						</h2>
						<div className="flex gap-6 justify-left">
							<button className="bg-primary text-white text-xl px-10 py-4 rounded-xl shadow-md hover:bg-primary-darker flex items-center focus:outline-none focus:ring ring-primary-lighter2">
								Lorem ipsum
							</button>
							<button className="bg-primary-lighter3 text-primary text-xl px-10 py-4 rounded-xl shadow-md hover:bg-primary-lighter2 hover:text-white flex items-center focus:outline-none focus:ring ring-primary-lighter">
								Site amet
							</button>
						</div>
					</div>
					<div className="lg:w-1/2 lg:h-full w-full">
						<img
						className="lg:h-full w-full object-cover object-right h-80"
							src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
							alt="Stock"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero3;

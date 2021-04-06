import { useState } from "react";
const navLinkStyle =
	"text-xl text-gray-300  hover:text-gray-100 md:w-auto w-full md:text-left text-center";
const formAuthButton = "border flex-1 rounded-xl border-gray-300 text-2xl text-gray-500 p-2 text-center hover:text-dark focus:outline-none focus:ring focus:ring-primary"
const formInput = 'border block w-full border-gray-300 mb-4 py-3 px-5 rounded-xl focus:outline-none focus:border-primary'

const Hero5 = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(true);
	return (
		<div className="lg:h-screen md:h-auto overflow-x-hidden h-screen bg-dark">
			<div className="w-full relative h-full flex flex-col ">
				<div className="flex items-center px-10 md:px-24 py-10 gap-14 bg-dark ">
					<img
						className="w-12 h-auto"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt="Logo"
					/>

					<div
						className={
							"z-20 gap-8 md:gap-14 absolute md:relative flex w-screen md:w-auto flex-wrap top-0 transition-all duration-500 md:h-auto h-screen md:py-0 content-center md:flex-nowrap bg-dark md:bg-opacity-0 lg:mx-auto md:left-0 md:items-center flex-1 " +
							(mobileMenuVisible ? " left-0" : " left-full")
						}
					>
						<button
							onClick={(e) => {
								setMobileMenuVisible(false);
							}}
							className="md:hidden text-right w-auto ml-auto pr-10 absolute right-5 top-5 focus:outline-none text-gray-400"
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
							className="text-xl text-primary-lighter md:text-gray-100 md:w-auto w-full md:text-left text-center md:bg-gray-500 px-7 py-3 rounded-md md:shadow hover:bg-gray-600 hover:text-white shadow-none md:ml-auto"
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
				<div className="flex lg:flex-nowrap flex-wrap lg:flex-1">
					<div className="lg:w-1/2 w-full lg:mt-40 md:my-10 md:mb-24 my-10 mb-20 px-10 md:px-24">
						<div className="bg-black bg-opacity-30 py-1 pl-1 rounded-full flex w-max items-center mb-4">
							<span className="bg-primary px-4 py-1 rounded-full text-white uppercase">
								Lorem ipsum
							</span>
							<span className="text-gray-400 px-3">
								Lorem ipdusm dolor site
							</span>
							<button>
								<svg
									className="w-6 h-6 align-middle text-gray-300 mr-3"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</button>
						</div>
						<h1 className="lg:text-7xl md:text-5xl font-bold text-gray-300 mb-8 text-4xl">
							Lorem ipsum dolor sit
							<br />
							<span className="text-primary">
								amet consectetur
							</span>
						</h1>

						<h2 className="text-xl text-gray-400 mb-8 ">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Porro quaerat, maiores odit quasi,
							voluptatibus maxime praesentium explicabo mollitia
							ea, dolore eveniet nisi assumenda accusantium at?
						</h2>

						<div className="flex gap-6 justify-left">
							<img
								className="w-1/4"
								src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png"
								alt="Logo"
							/>
							<img
								className="w-1/4"
								src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png"
								alt="Logo"
							/>
							<img
								className="w-1/4"
								src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png"
								alt="Logo"
							/>
						</div>
					</div>
					<div className="lg:w-1/2 lg:h-full w-full flex items-center justify-center lg:pl-36 lg:pr-52 px-10 mb-20">
						<div className="bg-white w-full rounded-2xl shadow-xl">
							<p className="text-dark text-md md:mb-2 mb-3 mt-16 md:px-16 px-10">
								Sign in with
							</p>
							<div className="flex w-full gap-4 md:px-16 px-10">
								<button className={formAuthButton}>
									<svg
										className="bi bi-facebook h-auto w-6 m-auto"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
									</svg>
								</button>
								<button className={formAuthButton}>
									<svg
										className="bi bi-twitter h-auto w-6 m-auto"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
									</svg>
								</button>
								<button className={formAuthButton}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-github  h-auto w-6 m-auto"
										viewBox="0 0 16 16"
									>
										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
									</svg>
								</button>
							</div>
                            <div className="py-10 text-center text-gray-400 relative md:mx-16 mx-10">
                                <div className="absolute h-px w-full bg-gray-300 top-1/2"></div>
                                <span className="bg-white relative inline-block px-3">OR</span>
                            </div>
                            <form action="#" className="md:px-16 px-10">
                                <label htmlFor="signupName" className="sr-only">Full name</label>
                                <input type="text" id="signupName" placeholder="Full name"  className={formInput}/>
                                
                                <label htmlFor="signupEmail" className="sr-only">Email</label>
                                <input type="email" id="signupEmail" placeholder="Email" className={formInput}/>

                                <label htmlFor="signupPassword" className="sr-only">Password</label>
                                <input type="password" id="signupPassword" placeholder="Password" className={formInput}/>

                                <button
                                className="bg-primary-lighter text-center py-3 w-full rounded-xl text-white shadow-md mb-14 hover:bg-primary"
                                type="submit">Create account</button>
                            </form>
                            <div className="bg-gray-50 border-t border-gray-200 md:px-16 px-10 py-8 rounded-b-2xl">
                                By signing up you agree to our <a href="http://google.com">Terms of User, GDPR, Data Policy</a>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero5;

import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
	DribbbleIcon,
	GithubIcon,
	LinkedInIcon,
	MoonIcon,
	SunIcon,
	TwitterIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();
	return (
		<Link
			href={href}
			className={`${className} relative group`}
		>
			{title}

			<span
				className={`h-[1px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-dark absolute left-0 -bottom-0.5 ${
					router.asPath === href ? 'w-full' : 'w-0'
				} dark:bg-light`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const CustomMobileLink = ({
	href,
	title,
	className = '',
	toggle,
}) => {
	const router = useRouter();

	const handleClick = () => {
		toggle();
		router.push(href);
	};
	return (
		<button
			href={href}
			className={`${className} relative group text-light dark:text-dark my-2`}
			onClick={handleClick}
		>
			{title}

			<span
				className={`h-[1px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-light absolute left-0 -bottom-0.5 ${
					router.asPath === href ? 'w-full' : 'w-0'
				} dark:bg-dark`}
			>
				&nbsp;
			</span>
		</button>
	);
};

const Navbar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className="w-full px-32 py-8 font-medium !bg-[#E4E7F0] flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-4">
			<div className="hidden sm:flex">
				{/* <Logo isOpen={isOpen} setIsOpen={setIsOpen} /> */}
				<h2 className="font-bold sm:text-2xl text-[#232E5D] md:text-4xl sm:pt-0 lg:pt-10">
					Seraphs Care
				</h2>
			</div>
			<button
				className="flex-col justify-center items-center hidden lg:flex"
				onClick={handleClick}
			>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
						isOpen
							? 'rotate-45 translate-y-1'
							: '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
						isOpen
							? '-rotate-45 -translate-y-1'
							: 'translate-y-0.5'
					}`}
				></span>
			</button>

			<div className="w-full flex justify-between items-center lg:hidden">
				<div className="">
					{/* <Logo isOpen={isOpen} setIsOpen={setIsOpen} /> */}
					<h2 className="font-bold sm:text-2xl text-[#232E5D] md:text-4xl sm:pt-4 lg:pt-10">
						Seraphs Care
					</h2>
				</div>
				<nav>
					<CustomLink
						href={'/'}
						title={'Home'}
						className="mr-4"
					/>
					<CustomLink
						href={'/aboutus'}
						title={'About Us'}
						className="mx-4"
					/>
					<CustomLink
						href={'/contact'}
						title="Contact Us"
						className="mx-4"
					/>
				</nav>

				<nav className="flex items-center justify-center flex-wrap">
					<motion.a
						href={'#'}
						target="_blank"
						whileHover={{
							y: -2,
						}}
						whileTap={{ scale: 0.9 }}
						className="w-6 mr-3"
					>
						<TwitterIcon />
					</motion.a>
					{/* <motion.a
						href={'https://github.com/emmanuelandyeze'}
						target="_blank"
						whileHover={{
							y: -2,
						}}
						whileTap={{ scale: 0.9 }}
						className="w-6 mx-3"
					>
						<GithubIcon />
					</motion.a> */}
					{/* <motion.a
						href={
							'https://www.linkedin.com/in/emmanuel-andy-eze-55833b216/'
						}
						target="_blank"
						whileHover={{
							y: -2,
						}}
						whileTap={{ scale: 0.9 }}
						className="w-6 mx-3"
					>
						<LinkedInIcon />
					</motion.a> */}

					<motion.a
						href={'#'}
						target="_blank"
						whileHover={{
							y: -2,
						}}
						whileTap={{ scale: 0.9 }}
						className="w-6 ml-3"
					>
						<BsWhatsapp size={20} color="green" />
					</motion.a>

					{/* <button
						onClick={() =>
							setMode(mode === 'light' ? 'dark' : 'light')
						}
						className={`ml-5 flex items-center rounded-full p-1 ${
							mode === 'light'
								? 'bg-dark text-light'
								: 'bg-light text-dark'
						}`}
					>
						{mode === 'dark' ? (
							<SunIcon className={'fill-dark'} />
						) : (
							<MoonIcon className={'fill-dark'} />
						)}
					</button> */}
				</nav>
			</div>

			{isOpen ? (
				<motion.div
					initial={{
						scale: 0,
						opacity: 0,
						x: '-50%',
						y: '-50%',
					}}
					animate={{ scale: 1, opacity: 1 }}
					className="min-w-[70vw] flex flex-col justify-between z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-12 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<nav className="flex items-center flex-col justify-center">
						<CustomMobileLink
							href={'/'}
							title={'Home'}
							toggle={handleClick}
						/>
						<CustomMobileLink
							href={'/aboutus'}
							title={'About Us'}
							toggle={handleClick}
						/>
						<CustomMobileLink
							href={'/contact'}
							title="Contact Us"
							toggle={handleClick}
						/>
					</nav>

					<nav className="flex items-center justify-center flex-wrap mt-2">
						<motion.a
							href={'/'}
							target="_blank"
							whileHover={{
								y: -2,
							}}
							whileTap={{ scale: 0.9 }}
							className="w-6 mr-3 sm:mx-1"
						>
							<TwitterIcon />
						</motion.a>
						<motion.a
							href={'/'}
							target="_blank"
							whileHover={{
								y: -2,
							}}
							whileTap={{ scale: 0.9 }}
							className="w-6 ml-3 sm:mx-1"
						>
							<LinkedInIcon />
						</motion.a>
						{/* <motion.a
							href={'https://github.com/emmanuelandyeze'}
							target="_blank"
							whileHover={{
								y: -2,
							}}
							whileTap={{ scale: 0.9 }}
							className="w-6 mx-3"
						>
							<GithubIcon />
						</motion.a> */}
						<motion.a
							href={'#'}
							target="_blank"
							whileHover={{
								y: -2,
							}}
							whileTap={{ scale: 0.9 }}
							className="w-6 ml-3 sm:mx-1"
						>
							<BsWhatsapp size={24} color="green" />
						</motion.a>
						{/* <button
							onClick={() =>
								setMode(mode === 'light' ? 'dark' : 'light')
							}
							className={`ml-5 flex items-center rounded-full p-1 sm:mx-1 ${
								mode === 'light'
									? 'bg-dark text-light'
									: 'bg-light text-dark'
							}`}
						>
							{mode === 'dark' ? (
								<SunIcon className={'fill-dark'} />
							) : (
								<MoonIcon className={'fill-dark'} />
							)}
						</button> */}
					</nav>
				</motion.div>
			) : null}

			{/* <div className="flex-col justify-center items-center hidden lg:flex">
				<Link
					href={'/'}
					className="flex items-center sm:mr-0 bg-dark text-light md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-0"
				>
					About Us
				</Link>
			</div> */}
		</header>
	);
};

export default Navbar;

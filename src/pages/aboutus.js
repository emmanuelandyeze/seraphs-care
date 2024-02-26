import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AboutPic from '../../public/images/about.png';
import CarePic from '../../public/images/pic.jpg';
import AboutCards from '@/components/AboutCards';

const aboutus = () => {
	return (
		<>
			<main className="flex w-full flex-col items-center justify-center !bg-[#E4E7F0]">
				<Layout className="pt-20 !bg-[#E4E7F0] !pb-10">
					<div className="grid w-full grid-cols-6 gap-16 lg:flex lg:flex-col sm:justify-center">
						<div className="col-span-3 flex flex-col md:w-full lg:w-full items-start justify-start sm:justify-center sm:items-center dark:text-light !text-light">
							<div>
								<h2 className="mb-8 text-3xl !lg:text-2xl font-bold uppercase text-dark/75 !text-[#232E5D] dark:text-light">
									Our Services
								</h2>
								<div className="col-span-3 relative hidden sm:block rounded-2xl border-solid border-light dark:border-light !bg-[#232E5D] dark:bg-[#232E5D] p-0 mb-5">
									<div className="absolute top-0 -right-3 -z-10 2-[102%] h-[103%] rounded-[2rem] !bg-dark dark:bg-light" />
									<Image
										src={CarePic}
										alt=""
										className="w-full h-auto rounded-2xl"
										priority
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
									/>
								</div>
								<p className="text-lg text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									With our multi-skilled team of health and
									social care experts, we are able to build
									a robust, personalised care package for
									you and your family.
								</p>
								<br />
								<p className="text-lg text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									We can provide as much or as little
									support or care as required, whether you
									are looking for 24 hour care or a little
									help to maintain an independent lifestyle
									a few days a week. All of our care
									packages are managed by experienced nurses
									and a supportive, highly trained care
									team, matched to your unique
									circumstances.
								</p>{' '}
								<br />
								<p className="text-lg text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									Below is a selection of some of the
									conditions and complex needs we support.
									However, please bear in mind this list is
									not exhaustive!
								</p>{' '}
								<br />
							</div>
						</div>
						<div className="col-span-3 relative sm:hidden md:hidden   rounded-2xl border-2 border-solid border-light dark:border-light !bg-[#232E5D] dark:bg-[#232E5D] p-0">
							<div className="absolute top-0 -right-3 -z-10 2-[102%] h-[103%] rounded-[2rem] !bg-dark dark:bg-light" />
							<Image
								src={CarePic}
								alt=""
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							/>
						</div>
					</div>
				</Layout>
			</main>

			{/* Cards  */}

			<main className="flex w-full flex-col pb-20 items-center justify-center !bg-[#E4E7F0]">
				<div className="max-w-8xl mx-auto w-full lg:flex lg:flex-col sm:justify-center">
					<AboutCards />
				</div>
				<div className="flex sm:justify-start sm:mx-auto items-center self-center mt-0 lg:self-center sm:self-center pt-8">
					<Link
						href={'/contact'}
						className="flex items-start bg-[#232E5D] text-light md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-2"
					>
						Get in Touch
					</Link>
				</div>
			</main>
		</>
	);
};

export default aboutus;

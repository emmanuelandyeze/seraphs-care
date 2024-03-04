import Layout from '@/components/Layout';
import Image from 'next/image';
import React from 'react';
import MapPic from '../../public/images/map.png';

const contact = () => {
	return (
		<main
			id="contact"
			className="flex w-full flex-col items-center justify-center !bg-[#E4E7F0]"
		>
			<Layout className="pt-20 !bg-[#E4E7F0] !pb-20">
				<div className="grid w-full grid-cols-6 gap-16 lg:flex lg:flex-col sm:justify-center">
					<div className="col-span-3 relative sm:hidden md:hidden   rounded-2xl border-solid dark:border-light !bg-[#E4E7F0] border-[#232E5D] dark:bg-[#232E5D] p-0">
						{/* <div className="absolute top-0 -right-3 -z-10 2-[102%] h-[103%] rounded-[2rem] !bg-dark dark:bg-light" /> */}
						<Image
							src={MapPic}
							alt=""
							className="w-full h-96 object-center rounded-2xl"
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
						/>
					</div>
					<div className="col-span-3 flex flex-col md:w-full lg:w-full items-start justify-start sm:justify-center sm:items-center dark:text-light !text-light">
						<div>
							<h2 className="mb-8 text-3xl !lg:text-2xl font-bold uppercase text-dark/75 !text-[#232E5D] dark:text-light">
								Contact Us
							</h2>
							<div className="col-span-3 relative hidden sm:block rounded-2xl border-solid border-light dark:border-light !bg-[#232E5D] dark:bg-[#232E5D] p-0 mb-5">
								<div className="absolute top-0 -right-3 -z-10 2-[102%] h-[103%] rounded-[2rem] !bg-dark dark:bg-light" />
								<Image
									src={MapPic}
									alt=""
									className="w-full h-auto rounded-2xl"
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
								/>
							</div>
							<h1 className="text-[#232E5D] text-2xl font-bold">
								Find Us
							</h1>
							<p className="text-md text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
								Unit 2, Capital Industrial Estate,
							</p>
							<p className="text-md text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
								Crabtree Monarway South, Belverdere, Kent
							</p>
							<p className="text-md text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
								London, DA17 6BJ
							</p>
							<br />
							<h1 className="text-[#232E5D] text-2xl font-bold">
								Call Us
							</h1>
							<p className="text-md text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
								020-459-95773
							</p>
							<p className="text-md text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
								075-592-11503
							</p>
							<p className="text-md text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
								073-677-55122
							</p>
							<br />
							<h1 className="text-[#232E5D] text-2xl font-bold">
								Email Us
							</h1>
							<p className="text-md text-[#232E5D] font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
								info@seraphscareuk.com
							</p>
							<br />
						</div>
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default contact;

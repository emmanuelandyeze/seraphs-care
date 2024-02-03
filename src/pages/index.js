import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Image from 'next/image';
import ProfilePic from '../../public/images/landing.png';
import AboutPic from '../../public/images/about.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Seraphs Care</title>
				<meta
					name="description"
					content="Social Care Website for Seraphs Care"
				/>
			</Head>
			<main className="flex items-center !bg-[#E4E7F0] text-dark w-full min-h-screen dark:text-light bg-cover">
				<Layout className="pt-0 md:pt-12 sm:pt-0 !bg-[#E4E7F0]">
					<div className="flex items-center justify-between w-full lg:flex-col">
						<div className="w-1/2 md:w-full">
							<Image
								src={ProfilePic}
								alt=""
								className="w-full h-auto lg:hidden md:inline-block md:w-full"
								priority
								width={200}
								height={200}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							/>
						</div>
						<div className="w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center md:mt-2">
							<AnimatedText
								text={"Welcome to Seraph's Care"}
								className="!text-6xl !text-[#232E5D] text-left xl:!text-5xl !leading-normal lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
							/>

							<p className="py-4 text-lg font-medium md:text-lg sm:text-md lg:text-xl xl:text-xl">
								Empowering Lives, Nurturing Well-being: Your
								Gateway to Compassionate Health and Social
								Care.
							</p>
							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link
									href={'/'}
									target="_blank"
									className="flex items-center bg-[#232E5D] text-light md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-[#E4E7F0] hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-2"
								>
									About Us
								</Link>
								<Link
									href={'/'}
									className="flex items-center bg-[#E4E7F0] text-[#232E5D] md:p-2 md:px-4 md:text-base dark:bg-[#232E5D] dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-[#232E5D] hover:text-light border-2 border-solid border-transparent hover:border-light"
								>
									Get Involved
								</Link>
							</div>
						</div>
					</div>
				</Layout>
			</main>
			<main className="flex w-full flex-col items-center justify-center">
				<Layout className="pt-10 !bg-[#232E5D]">
					<AnimatedText
						text={'Empowering Lives, Nurturing Well-being'}
						className="mb-16 !text-6xl lg:!text-6xl !text-left sm:!text-5xl xs:!text-4xl sm:mb-8 !text-light"
					/>
					<div className="grid w-full grid-cols-6 gap-16 lg:flex lg:flex-col sm:justify-center">
						<div className="col-span-3 relative sm:hidden md:hidden   rounded-2xl border-2 border-solid border-light dark:border-light !bg-[#232E5D] dark:bg-[#232E5D] p-8">
							<div className="absolute top-0 -right-3 -z-10 2-[102%] h-[103%] rounded-[2rem] !bg-dark dark:bg-light" />
							<Image
								src={AboutPic}
								alt=""
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							/>
						</div>
						<div className="col-span-3 flex flex-col md:w-full lg:w-full items-start justify-start sm:justify-center sm:items-center dark:text-light !text-light">
							<div>
								<h2 className="mb-8 text-lg !lg:text-2xl font-bold uppercase text-dark/75 !text-light dark:text-light">
									Welcome to Seraphs Health and Social Care
									Services
								</h2>
								<p className="text-lg font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									Seraphs Health and Social Care Services
									Limited is a specialist nurse-led provider
									of home care services for adults and
									children with complex care needs. We are
									here to help you and your family with the
									assistance you need, providing our complex
									care services throughout the nation.
								</p>
								<br />
								<p className="text-lg font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									We have a passion for truly personalised
									care. Our highly skilled care teams,
									knowledge and experience give you the
									highest standards of support.
								</p>{' '}
								<p className="text-lg font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									Seraphs Health and Social Care Services
									will allow you to live an independent and
									fulfilling life in the comfort of your own
									home.
								</p>{' '}
								<br />
								<div className="flex  sm:justify-start sm:mx-auto items-center self-center mt-2 lg:self-center sm:self-center pt-8">
									<Link
										href={'/'}
										className="flex items-start bg-[#232E5D] text-light md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-2"
									>
										Hire Us
									</Link>
									{/* <Link
										href={'/'}
										className="flex items-center bg-light text-dark md:p-2 md:px-4 md:text-base dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-light"
									>
										View Projects
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</main>
			<main className="flex w-full flex-col items-center justify-center">
				<Layout className="pt-10 !bg-[#E4E7F0]">
					<div className="max-w-4xl mx-auto w-full lg:flex lg:flex-col sm:justify-center">
						<div className="col-span-3 flex flex-col md:w-full lg:w-full items-start justify-start sm:justify-center sm:items-center dark:text-light !text-[#232E5D]">
							<div>
								<h2 className="mb-8 text-3xl underline underline-offset-8 font-bold uppercase text-dark/75 !text-[#232E5D] dark:text-light">
									Our Care
								</h2>
								<p className="text-lg font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									With our multi-skilled team of health and
									social care experts, we are able to build
									a robust, personalised care package for
									you and your family.
								</p>
								<br />
								<p className="text-lg font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									We can provide as much or as little
									support or care as required, whether you
									are looking for 24 hour care or a little
									help to maintain an independent lifestyle
									a few days a week. All of our care
									packages are managed by experienced nurses
									and a supportive, highly trained care
									team, matched to your unique
									circumstances.
								</p>
								<br />
								<p className="text-lg font-medium md:text-md sm:text-md lg:text-lg xl:text-xl">
									Below is a selection of some of the
									conditions and complex needs we support.
									However, please bear in mind this list is
									not exhaustive!
								</p>{' '}
								<br />
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}

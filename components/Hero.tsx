import Image from "next/image";

const Hero = () => {
	const birthyear = 2001;
	const age = new Date().getFullYear() - birthyear;
	return (
		<section className="w-full">
			<div className="container flex flex-col items-center max-w-5xl px-6 py-10 mx-auto md:py-20 md:flex-row md:px-0">
				<div className="relative mb-6 overflow-hidden rounded-full md:mb-0 w-36 h-36">
					<Image
						src="/images/profile.jpg"
						alt="profile"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex-1 md:ml-10">
					<h1 className="mb-2 text-3xl font-bold text-center md:text-left md:mb-3 md:text-5xl">
						Ardha Yudhatama
					</h1>
					<h2 className="mb-2 text-base font-medium text-center md:mb-4 md:text-xl md:text-left">
						Developer, Writer, Dreamer
					</h2>
					<p className="text-base leading-normal text-center md:leading-loose text-neutral-500 md:text-left">
						{age} year old full-stack developer. Love working with
						web technologies. I speak Typescript.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;

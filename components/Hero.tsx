import Image from "next/image";

const Hero = () => {
	const birthyear = 2001;
	const age = new Date().getFullYear() - birthyear;
	return (
		<section className="w-full">
			<div className="container flex items-center max-w-5xl py-20 mx-auto">
				<div className="relative overflow-hidden rounded-full w-36 h-36">
					<Image
						src="/images/profile.jpg"
						alt="profile"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex-1 ml-10">
					<h1 className="mb-3 text-5xl font-bold">Ardha Yudhatama</h1>
					<h2 className="mb-4 text-xl font-medium">
						Developer, Writer, Dreamer
					</h2>
					<p className="leading-loose text-neutral-500">
						{age} year old full-stack developer. Love working with
						web technologies. I speak Typescript.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;

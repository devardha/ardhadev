const Hero = () => {
	const birthyear = 2001;
	const age = new Date().getFullYear() - birthyear;
	return (
		<section className="w-full pt-20">
			<div className="container mx-auto pt-32 pb-32 max-w-4xl">
				<div>
					<h1 className="text-5xl font-bold mb-5">Ardha Yudhatama</h1>
					<h2 className="mb-5 text-xl font-medium">
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

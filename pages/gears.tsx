import Layout from "../components/Layout";
import Gears from "../components/Gears";
import Header from "../components/Header";
import Image from "next/image";

const About = () => {
	return (
		<Layout>
			<Header
				title="Gears"
				description="Here's what gear I'm currently using for programming."
			/>
			<section className="w-full">
				<div className="container max-w-5xl mx-auto mt-16 relative w-full h-[360px] md:h-[682px]">
					<Image
						src="/images/setup.jpg"
						alt="Setup"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</section>
			<Gears />
		</Layout>
	);
};

export default About;

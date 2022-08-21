import Layout from "../components/Layout";
import Gears from "../components/Gears";
import Header from "../components/Header";
import Image from "next/image";

const About = () => {
	return (
		<Layout>
			<Header
				title="Gears"
				description="Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo"
			/>
			<section className="w-full">
				<div className="container max-w-5xl mx-auto mt-16 relative w-full h-[682px]">
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

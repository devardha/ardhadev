import Image from "next/image";

interface GearType {
	title: string;
	image: string;
	links: any[];
	brand: string;
}

const Gear = ({ title, image, links, brand }: GearType) => {
	return (
		<div className="w-full mb-2 border border-neutral-200">
			<div className="flex flex-col items-baseline px-4 py-8">
				<div className="relative w-full h-64 px-10 mb-5 bg-white">
					<Image
						src={image}
						alt={title}
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<h3 className="flex px-3 mb-2 text-sm text-teal-500 bg-teal-100">
					{brand}
				</h3>
				<h4 className="text-xl font-semibold leading-tight tracking-tight">
					{title}
				</h4>
				<p className="mt-3 leading-tight text-neutral-400">
					How to control Tuya smart bulb using Tuya API and Python
				</p>
				<div className="mt-8">
					{links.map((item, index) => (
						<a
							href={item.url}
							key={index}
							className="flex justify-center w-full px-4 py-2 text-white bg-black"
						>
							Buy Now
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gear;

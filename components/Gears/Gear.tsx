/* eslint-disable @next/next/no-img-element */

interface GearType {
	title: string;
	image: string;
	links: any[];
	brand: string;
}

const Gear = ({ title, image, links, brand }: GearType) => {
	return (
		<div className="w-full mb-2 border border-neutral-200">
			<div className="px-4 py-8 flex flex-col items-baseline">
				<div className="h-64 bg-white mb-5 px-10">
					<img
						className="object-contain object-center w-full h-full"
						src={image}
						alt="thumbnail"
					/>
				</div>
				<h3 className="bg-teal-100 text-teal-500 flex px-3 text-sm mb-2">
					{brand}
				</h3>
				<h4 className="font-semibold tracking-tight leading-tight text-xl">
					{title}
				</h4>
				<p className="text-neutral-400 mt-3 leading-tight">
					How to control Tuya smart bulb using Tuya API and Python
				</p>
				<div className="mt-8">
					{links.map((item, index) => (
						<a
							href={item.url}
							key={index}
							className="flex w-full px-4 py-2 bg-black text-white justify-center"
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

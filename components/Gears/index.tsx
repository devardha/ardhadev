import Gear from "./Gear";

const Gears = () => {
	return (
		<section className="w-full">
			<div className="container max-w-5xl px-6 mx-auto mt-16 md:px-0">
				<div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
					{data.map((item, index) => (
						<Gear
							key={index}
							title={item.title}
							image={item.image}
							links={item.links}
							brand={item.brand}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gears;

const data = [
	{
		image: "/images/msi-katana-gf76.png",
		title: "MSI Katana GF76",
		brand: "MSI",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/PeopDS3K1rb",
			},
		],
	},
	{
		image: "/images/fantech-oca258s.png",
		title: "Fantech OCA258S",
		brand: "Fantech",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/kCmKu4MBUsb",
			},
		],
	},
	{
		image: "/images/razer-basilisk-x-hyperspeed.png",
		title: "Razer Basilisk X HyperSpeed",
		brand: "Razer",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/e74CNaBK1rb",
			},
		],
	},
	{
		image: "/images/canon-eos-rp.png",
		title: "Canon EOS RP (Body)",
		brand: "Canon",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/sWB5CrVO1rb",
			},
		],
	},
	{
		image: "/images/canon-rf-24-105.png",
		title: "RF24-105mm f/4-7.1 IS STM",
		brand: "Canon",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/wvMXea4O1rb",
			},
		],
	},
	{
		image: "/images/lg-29wl500.png",
		title: "LG 29WL500 Ultrawide",
		brand: "LG",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/aIv4qvfP1rb",
			},
		],
	},
	{
		image: "/images/corsair-hs50-pro-stereo.png",
		title: "Corsair HS50 Pro Stereo",
		brand: "Corsair",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/UF4PMZmP1rb",
			},
		],
	},
	{
		image: "/images/rexus-daxa-m71-classic.png",
		title: "Rexus DaXa M71 Classic",
		brand: "Rexus",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/9h860jOP1rb",
			},
		],
	},
	{
		image: "/images/hyperx-solocast.png",
		title: "HyperX Solocast",
		brand: "HyperX",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/dWsWhQvBUsb",
			},
		],
	},
	{
		image: "/images/logitech-z120.png",
		title: "Logitech Z120",
		brand: "Logitech",
		links: [
			{
				store: "Tokopedia",
				url: "https://tokopedia.link/kVX6bZHBUsb",
			},
		],
	},
];

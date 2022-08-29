import Link from "next/link";

const Footer = () => {
	return (
		<footer className="container max-w-5xl px-6 pt-32 pb-20 mx-auto md:pb-40 md:px-0">
			<div className="grid w-full grid-cols-2 md:grid-cols-4">
				{data.map((item, index) => (
					<div key={index} className="mb-10 md:mb-0">
						<h3 className="mb-4 text-lg font-semibold">
							{item.label}
						</h3>
						<ul>
							{item.childrens.map((subItem, index) => (
								<li key={index} className="mb-2">
									<Link href={subItem.url}>
										{subItem.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
};

const data = [
	{
		label: "About",
		childrens: [
			{
				label: "About Me",
				url: "/about",
			},
			{
				label: "Works",
				url: "https://github.com/devardha",
			},
			{
				label: "Gears",
				url: "/gears",
			},
		],
	},
	{
		label: "Social Media",
		childrens: [
			{
				label: "Twitter",
				url: "https://twitter.com/ardydhtm",
			},
			{
				label: "Instagram",
				url: "https://instagram.com/ardhayudhatama",
			},
			{
				label: "GitHub",
				url: "https://github.com/devardha",
			},
			{
				label: "TikTok",
				url: "https://www.tiktok.com/@ardhakk",
			},
		],
	},
	{
		label: "Newsletter",
		childrens: [
			{
				label: "Subscribe",
				url: "/newsletter",
			},
			{
				label: "RSS",
				url: "/rss",
			},
		],
	},
];

export default Footer;

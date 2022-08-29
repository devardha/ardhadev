import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data } = useSWR("/api/spotify", fetcher, {
		refreshInterval: 60000,
	});

	if (data) {
		console.log(data);
	}

	return (
		<footer className="container max-w-5xl px-6 pt-32 pb-20 mx-auto md:pb-40 md:px-0">
			<div className="grid items-start w-full grid-cols-2 md:grid-cols-4">
				{menu.map((item, index) => (
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
				<div className="flex w-full p-4 bg-[#f2f2f2] col-span-2 md:col-span-1 items-center rounded">
					<div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded">
						<FaSpotify
							className={`text-4xl ${
								data && data.isPlaying
									? "text-green-400"
									: "text-neutral-300"
							}`}
						/>
					</div>
					<div className="pl-4">
						<div className="font-medium">
							{data && data.isPlaying
								? data.data.title
								: "Not Playing"}
						</div>
						<div className="text-sm">
							{data.data && data.isPlaying
								? data.data.artist
								: "Spotify"}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

const menu = [
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

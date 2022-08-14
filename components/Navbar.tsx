import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
	const asPath = useRouter().asPath;
	return (
		<nav
			className="fixed top-0 flex flex-col items-center justify-between w-full text-black border-b border-gray-200"
			style={{
				background: "rgba(255,255,255,0.85)",
				backdropFilter: "saturate(180%) blur(20px)",
			}}
		>
			<div className="container flex items-center justify-between max-w-5xl py-8 mx-auto">
				<div className="relative z-10 flex items-center">
					{data.map((item, index) => (
						<Link href={item.path} key={index}>
							<div
								className={`mr-6 cursor-pointer ${
									asPath === item.path
										? "font-medium"
										: "text-neutral-500"
								}`}
							>
								{item.label}
							</div>
						</Link>
					))}
				</div>
				<div className="px-3 py-1 text-white bg-black">devardha</div>
			</div>
		</nav>
	);
};

const data = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Blog",
		path: "/blogs",
	},
	{
		label: "Works",
		path: "/works",
	},
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Gears",
		path: "/gears",
	},
];

export default Navbar;

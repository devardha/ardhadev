import { useRouter } from "next/router";

const Navbar = () => {
	const asPath = useRouter().asPath;
	return (
		<nav
			className="fixed w-full top-0 text-black flex flex-col justify-between items-center"
			style={{
				background: "rgba(255,255,255,0.85)",
				backdropFilter: "saturate(180%) blur(20px)",
			}}
		>
			<div className="container max-w-5xl mx-auto flex justify-between items-center py-8">
				<div className="flex items-center relative z-10">
					{data.map((item, index) => (
						<div
							key={index}
							className={`mr-6 cursor-pointer ${
								asPath === item.path
									? "font-medium"
									: "text-neutral-500"
							}`}
						>
							{item.label}
						</div>
					))}
				</div>
				<div>ardha.dev</div>
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

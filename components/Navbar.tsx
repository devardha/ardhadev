import Link from "next/link";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
	const asPath = useRouter().asPath;
	return (
		<nav
			className="fixed top-0 z-50 flex flex-col items-center justify-between w-full px-6 text-black border-b border-gray-200 md:px-0"
			style={{
				background: "rgba(255,255,255,0.85)",
				backdropFilter: "saturate(180%) blur(20px)",
			}}
		>
			<div className="container flex items-center justify-between max-w-5xl py-8 mx-auto">
				<div className="relative z-10 flex items-center">
					{data.map((item, index) => (
						<Link href={item.path} key={index}>
							<a
								className={`rounded cursor-pointer md:px-4 mr-5 md:mr-0 py-1 hover:bg-neutral-200 hover:bg-opacity-50 ${
									asPath === item.path
										? "font-medium"
										: "text-neutral-500"
								}`}
							>
								{item.label}
							</a>
						</Link>
					))}
				</div>
				<div className="absolute left-0 right-0 items-center justify-center hidden md:flex">
					<div className="px-3 py-1 text-white bg-black">
						devardha
					</div>
				</div>
				<div>
					<FiSearch className="text-2xl" />
				</div>
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
		label: "Works",
		path: "https://github.com/devardha",
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

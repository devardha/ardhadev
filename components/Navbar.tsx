const Navbar = () => {
	return (
		<nav className="fixed w-full top-0 h-20 text-white flex items-center">
			<div className="container max-w-7xl mx-auto flex justify-between items-center py-5">
				<div className="flex items-center relative z-10">
					{data.map((item, index) => (
						<div key={index} className="mr-6">
							{item.label}
						</div>
					))}
				</div>
				<div className="absolute flex justify-center left-0 right-0 w-full">
					<div className="bg-[#33D49D] px-3 py-2 font-semibold">
						ardha.dev
					</div>
				</div>
			</div>
		</nav>
	);
};

const data = [
	{
		label: "Blog",
	},
	{
		label: "Works",
	},
	{
		label: "About",
	},
	{
		label: "Gears",
	},
];

export default Navbar;

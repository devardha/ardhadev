interface HeaderProps {
	title: string;
	description: string;
}

const Header = ({ title, description }: HeaderProps) => {
	return (
		<div className="w-full">
			<div className="container max-w-5xl px-6 mx-auto md:px-0">
				<h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Header;

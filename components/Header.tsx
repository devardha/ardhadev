interface HeaderProps {
	title: string;
	description: string;
}

const Header = ({ title, description }: HeaderProps) => {
	return (
		<div className="w-full">
			<div className="container max-w-5xl mx-auto">
				<h2 className="mb-4 text-4xl font-bold">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Header;

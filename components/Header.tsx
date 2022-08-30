import ReactMarkdown from "react-markdown";
import RichText from "./Blocks/RichText";

interface HeaderProps {
	title: string;
	description: string;
}

const Header = ({ title, description }: HeaderProps) => {
	return (
		<div className="w-full">
			<div className="container max-w-5xl px-6 mx-auto md:px-0">
				<h2 className="mb-4 text-3xl font-bold md:text-4xl">
					<ReactMarkdown>{title}</ReactMarkdown>
				</h2>
				<RichText content={description} />
			</div>
		</div>
	);
};

export default Header;

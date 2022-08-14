import RichText from "./Blocks/RichText";

const Blocks = ({ blocks }: any) => {
	return (
		<div>
			{blocks.map((block: any) => {
				if (block.__component === "shared.rich-text") {
					return <RichText key={block.id} content={block.body} />;
				}
			})}
		</div>
	);
};

export default Blocks;

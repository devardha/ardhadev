import { Article } from "@lib/types/article";
import { format } from "date-fns";
import Image from "next/image";
import Post from "./Post";

interface Props {
	articles: Article[];
}

const Posts = ({ articles }: Props) => {
	return (
		<section className="w-full">
			<div className="container max-w-5xl px-6 mx-auto md:px-0">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{articles.slice(0, 6).map((item, index) => (
						<Post
							key={index}
							title={item.attributes.title}
							image={
								item.attributes.cover.data.attributes.formats
									.small.url
							}
							categories={item.attributes.categories.data}
							description={item.attributes.description}
							slug={item.attributes.slug}
							publishedAt={item.attributes.publishedAt}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Posts;

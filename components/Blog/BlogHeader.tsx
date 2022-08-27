import { format } from "date-fns";
import Image from "next/image";
import readingTime from "reading-time";
import { Article } from "../../types/article";

interface Props {
	article: Article;
}

const BlogHeader = ({ article }: Props) => {
	return (
		<div>
			<div className="mb-10">
				<h1 className="mb-5 text-5xl font-bold">
					{article.attributes.title}
				</h1>
				<p className="text-xl text-gray-400">
					{article.attributes.description}
				</p>
				<div className="flex items-center mt-10">
					<div className="relative w-8 h-8 overflow-hidden rounded-full lg:w-10 lg:h-10 bg-whitesmoke">
						<Image
							objectFit="cover"
							sizes="100%"
							layout="fill"
							src={
								article.attributes.author.data.attributes.image
									.data.attributes.formats.thumbnail.url
							}
							alt="author"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col ml-4 text-xs uppercase lg:text-sm">
						<a href="#" className="font-medium">
							Ardha Yudhatama
						</a>
						<span className="mt-1 text-gray-500">
							{format(
								new Date(article.attributes.publishedAt),
								"dd MMMM yyy"
							)}{" "}
							•{" "}
							{
								readingTime(article.attributes.blocks[0].body)
									.text
							}
						</span>
					</div>
				</div>
			</div>
			<div className="relative w-full h-[512px] overflow-hidden bg-whitesmoke">
				<Image
					objectFit="cover"
					sizes="100%"
					layout="fill"
					src={
						article.attributes.cover.data.attributes.formats.large
							.url
					}
					alt={article.attributes.title}
					priority
				/>
			</div>
		</div>
	);
};

export default BlogHeader;

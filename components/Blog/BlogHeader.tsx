import { format } from "date-fns";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";
import { Article } from "../../types/article";

interface Props {
	article: Article;
}

const BlogHeader = ({ article }: Props) => {
	console.log(article.attributes.cover.data);
	return (
		<div>
			<div className="px-6 mb-10 md:px-0">
				<h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
					{article.attributes.title}
				</h1>
				<p className="text-lg text-gray-400 md:text-xl">
					{article.attributes.description}
				</p>
				<div className="flex items-center mt-10">
					<div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full lg:w-10 lg:h-10">
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
			<div className="relative w-full h-[340px] md:h-[512px] overflow-hidden bg-gray-100">
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
			<ReactMarkdown className="px-6 mt-4 text-sm italic text-right content md:px-0">
				{article.attributes.cover.data.attributes.caption}
			</ReactMarkdown>
		</div>
	);
};

export default BlogHeader;

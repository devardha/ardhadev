import { Article } from "@lib/types/article";
import { format } from "date-fns";
import Image from "next/image";
import Post from "./Post";

interface Props {
	articles: Article[];
}

const PostList = ({ articles }: Props) => {
	return (
		<section className="w-full">
			<div className="container max-w-5xl px-6 mx-auto md:px-0">
				<div className="grid grid-cols-3 gap-6 mt-6">
					<div className="grid grid-cols-1 col-span-2 gap-6">
						{articles.map((item, index) => (
							<div key={index} className="flex">
								<div className="relative w-64 h-20 mb-3 mr-5 md:h-40 bg-neutral-200 shrink-0">
									{!item.attributes.publishedAt && (
										<div className="absolute top-0 left-0 z-10 px-3 py-1 text-sm text-white uppercase bg-black bg-opacity-50">
											Preview
										</div>
									)}
									<Image
										src={
											item.attributes.cover.data
												.attributes.formats.small.url
										}
										alt={item.attributes.title}
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div>
									<div className="flex items-center mb-3">
										<div className="relative w-6 h-6 mr-2 overflow-hidden rounded-full">
											<Image
												src={
													item.attributes.author.data
														.attributes.image.data
														.attributes.formats
														.small.url
												}
												alt={item.attributes.title}
												layout="fill"
												objectFit="cover"
											/>
										</div>
										<div className="flex text-sm">
											<div>
												{
													item.attributes.author.data
														.attributes.name
												}
											</div>
											<span className="mx-1">·</span>
											<div>
												{format(
													new Date(
														item.attributes.publishedAt
													),
													"dd MMMM yyy"
												)}{" "}
											</div>
										</div>
									</div>
									<h4 className="text-xl font-semibold leading-tight tracking-tight">
										{item.attributes.title}
									</h4>
									<p className="mt-3 leading-tight text-neutral-400">
										{item.attributes.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PostList;

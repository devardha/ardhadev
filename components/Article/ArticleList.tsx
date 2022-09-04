import { Article } from "@lib/types/article";
import { format } from "date-fns";
import Image from "next/image";

interface Props {
	articles: Article[];
	categories: any;
}

const PostList = ({ articles, categories }: Props) => {
	return (
		<section className="w-full">
			<div className="container max-w-5xl px-6 mx-auto md:px-0">
				<div className="grid items-start grid-cols-3 mt-6 gap-y-6 gap-x-12">
					<div className="grid grid-cols-1 col-span-2 gap-6">
						{articles.map((item, index) => (
							<div key={index} className="flex">
								<div className="relative w-64 h-24 mb-3 mr-5 md:h-44 bg-neutral-200 shrink-0">
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
									<div className="flex gap-1 mb-4">
										{item.attributes.categories.data.map(
											(item) => (
												<div
													key={item.id}
													className="px-2 py-1 text-sm text-blue-600 bg-blue-50"
												>
													{item.attributes.name}
												</div>
											)
										)}
									</div>
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
											{item.attributes.publishedAt && (
												<span className="mx-1">·</span>
											)}
											{item.attributes.publishedAt && (
												<div>
													{format(
														new Date(
															item.attributes.publishedAt
														),
														"dd MMMM yyy"
													)}
												</div>
											)}
										</div>
									</div>
									<h4 className="text-xl font-semibold leading-tight tracking-tight">
										{item.attributes.title}
									</h4>
									<p className="mt-2 leading-tight text-neutral-400">
										{item.attributes.description}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="sticky top-32">
						<h3 className="mb-5 font-semibold">Categories</h3>
						<div className="flex flex-wrap items-start w-full gap-3 ">
							{categories.map((category: any, index: number) => {
								console.log(category);
								return (
									<div
										key={index}
										className="px-3 py-1 bg-gray-100 rounded-3xl"
									>
										{category.attributes.name}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PostList;

import Link from "next/link";
import Image from "next/image";
import { Category } from "@lib/types/article";
import { Author } from "@lib/types/author";
import { format } from "date-fns";

interface Props {
	title: string;
	image: string;
	description: string;
	categories: Category[];
	slug: string;
	publishedAt: string | null;
	author: Author;
}

const Post = ({
	title,
	image,
	categories,
	description,
	slug,
	publishedAt,
	author,
}: Props) => {
	return (
		<Link href={`/blog/${slug}`}>
			<a className="block w-full mb-2">
				<div>
					<div className="relative w-full h-56 mb-3 md:h-48 bg-neutral-200">
						{!publishedAt && (
							<div className="absolute top-0 left-0 z-10 px-3 py-1 text-sm text-white uppercase bg-black bg-opacity-50">
								Preview
							</div>
						)}
						<Image
							src={image}
							alt={title}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="flex gap-1 mb-4">
						{categories.map((item) => (
							<div
								key={item.id}
								className="px-2 py-1 text-sm text-blue-600 bg-blue-50"
							>
								{item.attributes.name}
							</div>
						))}
					</div>

					<h4 className="text-xl font-semibold leading-tight tracking-tight">
						{title}
					</h4>
					<p className="mt-2 leading-tight text-neutral-400">
						{description}
					</p>
					<div className="flex items-center mt-3">
						<div className="relative w-6 h-6 mr-2 overflow-hidden rounded-full">
							<Image
								src={
									author.attributes.image.data.attributes
										.formats.small.url
								}
								alt={author.attributes.name}
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="flex text-sm">
							<div>{author.attributes.name}</div>
							{publishedAt && <span className="mx-1">·</span>}
							{publishedAt && (
								<div>
									{format(
										new Date(publishedAt),
										"dd MMMM yyy"
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Post;

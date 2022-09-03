import Link from "next/link";
import Image from "next/image";
import { Category } from "@lib/types/article";

interface Props {
	title: string;
	image: string;
	description: string;
	categories: Category[];
	slug: string;
	publishedAt: string | null;
}

const Post = ({
	title,
	image,
	categories,
	description,
	slug,
	publishedAt,
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
					<div className="flex gap-1 mb-3">
						{categories.map((item, index) => (
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
					<p className="mt-3 leading-tight text-neutral-400">
						{description}
					</p>
				</div>
			</a>
		</Link>
	);
};

export default Post;

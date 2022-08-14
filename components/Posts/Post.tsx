/* eslint-disable @next/next/no-img-element */

import { Category } from "../../types/article";

interface PostType {
	title: string;
	image: string;
	description: string;
	categories: Category[];
}

const Post = ({ title, image, categories, description }: PostType) => {
	return (
		<div className="w-full mb-2">
			<div>
				<div className="h-48 mb-3 bg-neutral-200">
					<img
						className="object-cover object-center w-full h-full"
						src={image}
						alt="thumbnail"
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
		</div>
	);
};

export default Post;

/* eslint-disable @next/next/no-img-element */

interface PostType {
	title: string;
	image: string;
}

const Post = ({ title, image }: PostType) => {
	return (
		<div className="w-full mb-2">
			<div>
				<div className="h-48 bg-neutral-200 mb-3">
					<img
						className="object-cover object-center w-full h-full"
						src={image}
						alt="thumbnail"
					/>
				</div>
				<div className="flex gap-1 mb-3">
					<div className="text-sm py-1 px-2 bg-teal-100 text-teal-600">
						Programming
					</div>
				</div>
				<h4 className="font-semibold tracking-tight leading-tight text-xl">
					{title}
				</h4>
				<p className="text-neutral-400 mt-3 leading-tight">
					How to control Tuya smart bulb using Tuya API and Python
				</p>
			</div>
		</div>
	);
};

export default Post;

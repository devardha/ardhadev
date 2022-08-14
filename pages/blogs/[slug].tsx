import type { NextPage, GetStaticPropsContext } from "next";
import Layout from "../../components/Layout";
import Image from "next/image";
import axios from "axios";
import { Article } from "../../types/article";
import { format } from "date-fns";
import readingTime from "reading-time";
import Markdown from "../../components/Markdown";
import Blocks from "../../components/Blocks";

interface HomePageProps {
	article: Article;
}

const BlogPage: NextPage<HomePageProps> = ({ article }) => {
	return (
		<Layout title={article.attributes.title}>
			<div className="container max-w-screen-md mx-auto">
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
									article.attributes.author.data.attributes
										.image.data.attributes.formats.thumbnail
										.url
								}
								alt="author"
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
									readingTime(
										article.attributes.blocks[0].body
									).text
								}
							</span>
						</div>
					</div>
				</div>
				<img
					src={
						article.attributes.cover.data.attributes.formats.large
							.url
					}
					alt={article.attributes.title}
				/>
				<div className="mt-10">
					<Blocks blocks={article.attributes.blocks} />
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticProps({ params }: GetStaticPropsContext<any>) {
	const { data } = await axios.get(
		process.env.STRAPI_BASE_URL +
			`/api/articles?slug=${params.slug}&populate=cover,categories,blocks,author,author.image`
	);

	return {
		props: {
			article: data.data[0],
		},
	};
}

export async function getStaticPaths() {
	const { data } = await axios.get(
		process.env.STRAPI_BASE_URL + `/api/articles`
	);

	const paths = data.data.map((article: Article) => ({
		params: { slug: article.attributes.slug },
	}));

	return {
		paths: paths,
		fallback: false, // can also be true or 'blocking'
	};
}

export default BlogPage;

import type { NextPage, GetStaticPropsContext } from "next";
import Layout from "../../components/Layout";
import axios from "axios";
import { Article } from "../../types/article";
import Blocks from "../../components/Blocks";
import BlogHeader from "../../components/Blog/BlogHeader";

interface HomePageProps {
	article: Article;
}

const BlogPage: NextPage<HomePageProps> = ({ article }) => {
	return (
		<Layout title={article.attributes.title}>
			<div className="container max-w-screen-md mx-auto">
				<BlogHeader article={article} />
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
			`/api/articles?filters[slug][$eq]=${params.slug}&populate=cover,categories,blocks,author,author.image`
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

import type { NextPage, GetStaticPropsContext } from "next";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Posts from "../../components/Posts";
import axios from "axios";
import { Article } from "../../types/article";

interface HomePageProps {
	article: Article;
}

const BlogPage: NextPage<HomePageProps> = ({ article }) => {
	console.log(article);
	return (
		<Layout title={article.attributes.title}>
			<div></div>
		</Layout>
	);
};

export async function getStaticProps({ params }: GetStaticPropsContext<any>) {
	const { data } = await axios.get(
		process.env.STRAPI_BASE_URL +
			`/api/articles?slug=${params.slug}&populate=cover,categories`
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

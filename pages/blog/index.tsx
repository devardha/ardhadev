import type { NextPage, GetStaticPropsContext } from "next";
import Hero from "@components/Hero";
import Layout from "@components/Layout";
import axios from "axios";
import { Article } from "@lib/types/article";
import PostList from "@components/Article/ArticleList";

interface Props {
	articles: Article[];
	categories: any;
}

const Home: NextPage<Props> = ({ articles, categories }) => {
	return (
		<Layout>
			<PostList articles={articles} categories={categories} />
		</Layout>
	);
};

export async function getStaticProps(context: GetStaticPropsContext) {
	const endpoint =
		process.env.NODE_ENV === "development"
			? "/api/articles?populate=cover,author,author.image,categories&sort[0]=publishedAt%3Adesc&publicationState=preview"
			: "/api/articles?populate=cover,author,author.image,categories&sort[0]=publishedAt%3Adesc";

	const categoriesEndpoint = "/api/categories";
	const { data } = await axios.get(process.env.STRAPI_BASE_URL + endpoint);
	const { data: categories } = await axios.get(
		process.env.STRAPI_BASE_URL + categoriesEndpoint
	);

	return {
		props: {
			articles: data.data,
			categories: categories.data,
		},
	};
}

export default Home;

import type { NextPage, GetStaticPropsContext } from "next";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Posts from "../../components/Posts";
import axios from "axios";
import { Article } from "../../types/article";

interface HomePageProps {
	articles: Article[];
}

const BlogsPage: NextPage<HomePageProps> = ({ articles }) => {
	return (
		<Layout>
			<Posts articles={articles} />
		</Layout>
	);
};

export async function getStaticProps(context: GetStaticPropsContext) {
	const { data } = await axios.get(
		process.env.STRAPI_BASE_URL + "/api/articles?populate=cover,categories"
	);

	return {
		props: {
			articles: data.data,
		},
	};
}

export default BlogsPage;

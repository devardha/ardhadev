import type { NextPage, GetStaticPropsContext } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Blog";
import axios from "axios";
import { Article } from "../types/article";

interface HomePageProps {
	articles: Article[];
}

const Home: NextPage<HomePageProps> = ({ articles }) => {
	return (
		<Layout>
			<Hero />
			<Posts articles={articles} />
		</Layout>
	);
};

export async function getStaticProps(context: GetStaticPropsContext) {
	const { data } = await axios.get(
		process.env.STRAPI_BASE_URL + "/api/articles?populate=cover,categories&sort[0]=publishedAt%3Adesc"
	);

	return {
		props: {
			articles: data.data,
		},
	};
}

export default Home;

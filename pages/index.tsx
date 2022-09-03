import type { NextPage, GetStaticPropsContext } from "next";
import Hero from "@components/Hero";
import Layout from "@components/Layout";
import Posts from "@components/Blog";
import axios from "axios";
import { Article } from "@lib/types/article";

interface Props {
	articles: Article[];
}

const Home: NextPage<Props> = ({ articles }) => {
	return (
		<Layout>
			<Hero />
			<Posts articles={articles} />
		</Layout>
	);
};

export async function getStaticProps(context: GetStaticPropsContext) {
	const endpoint =
		process.env.NODE_ENV === "development"
			? "/api/articles?populate=cover,categories&sort[0]=publishedAt%3Adesc&publicationState=preview"
			: "/api/articles?populate=cover,categories&sort[0]=publishedAt%3Adesc";
	const { data } = await axios.get(process.env.STRAPI_BASE_URL + endpoint);

	return {
		props: {
			articles: data.data,
		},
	};
}

export default Home;

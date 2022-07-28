import type { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Posts />
		</Layout>
	);
};

export default Home;

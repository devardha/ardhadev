import type { NextPage, GetStaticPropsContext } from "next";
import Layout from "../../components/Layout";
import axios from "axios";
import { Article } from "../../types/article";
import Blocks from "../../components/Blocks";
import BlogHeader from "../../components/Blog/BlogHeader";
import ProgressBar from "../../components/ProgressBar";
import { MutableRefObject, useRef, useState } from "react";
import useSWR from "swr";

interface HomePageProps {
	article: Article;
}

const BlogPage: NextPage<HomePageProps> = ({ article }) => {
	const ref: MutableRefObject<null> | any = useRef();

	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data } = useSWR("/api/mailchimp/subscribers", fetcher);

	const subscribe = (email: string) => {
		if (email === "" || !email.includes("@")) return;

		axios
			.post("/api/mailchimp/subscribe", { email })
			.then(() => {
				setEmail("");
				setSubscribed(true);
			})
			.catch((err) => console.log(err));
	};

	console.log(data && data.data);

	return (
		<Layout title={article.attributes.title}>
			<ProgressBar element={ref} />
			<div className="container max-w-screen-md mx-auto" ref={ref}>
				<BlogHeader article={article} />
				<div className="px-6 mt-4 md:px-0">
					<Blocks blocks={article.attributes.blocks} />
				</div>
				<div className="pt-10 mt-16 border-t border-dashed border-neutral-200 ">
					<div className="px-8 py-8 border border-blue-200 rounded bg-blue-50">
						<h3 className="mb-1 text-lg font-bold">
							Subscribe to the newsletter
						</h3>
						<p className="mb-4">
							Get emails from me about web development, tech, and
							early access to new articles
						</p>
						<div className="relative flex items-center mt-5">
							<input
								type="email"
								placeholder="Email"
								className="w-full px-4 py-3 rounded-md outline-none"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<button
								className="absolute right-0 z-10 h-full px-6 py-2 text-white bg-blue-600 rounded-md"
								onClick={() => subscribe(email)}
							>
								{subscribed ? "Subscribed" : "Subscribe"}
							</button>
						</div>
						<p className="mt-4 text-sm text-right text-gray-800">
							{data && data.data && data.data.total_items}{" "}
							subscribers
						</p>
					</div>
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

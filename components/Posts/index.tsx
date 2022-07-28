import Post from "./Post";

const Posts = () => {
	return (
		<section className="w-full">
			<div className="container mx-auto max-w-5xl">
				<h2 className="font-bold text-4xl mb-8">Blog Posts</h2>
				<div className="grid grid-cols-3 gap-6">
					{data.map((item, index) => (
						<Post
							key={index}
							title={item.title}
							image={item.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Posts;

const data = [
	{
		image: "https://images.unsplash.com/photo-1619559451460-b15f60bcdfdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		title: "Controlling Tuya Smart Bulb using Python",
	},
	{
		image: "https://images.unsplash.com/photo-1543699539-33a389c5dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		title: "Buying My First 1 BTC",
	},
	{
		image: "https://images.unsplash.com/photo-1601897690942-bcacbad33e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
		title: "Develop and Deploy a Golang API with Kubernetes and Docker",
	},
	{
		image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1436&q=80",
		title: "Redis: What and Why?",
	},
	{
		image: "https://inthegame.nl/wp-content/uploads/2020/05/UE5.jpg",
		title: "How I Made a Realistic Terrain in Unreal Engine 5",
	},
];
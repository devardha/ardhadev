/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["ardhadev.s3.ap-southeast-1.amazonaws.com", "i.scdn.co"],
	},
	async redirects() {
		return [
			{
				source: "/blogs",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;

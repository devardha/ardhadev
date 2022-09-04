/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["ardhadev.s3.ap-southeast-1.amazonaws.com", "i.scdn.co"],
	},
};

module.exports = nextConfig;

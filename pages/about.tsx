import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTiktok,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { SpotifyTopTrackResponse, TopTrack } from "../types/spotify";
import { getSpotifyTopTracks } from "../utils/spotify";

interface AboutPage {
	topTracks: TopTrack[];
}

const About = ({ topTracks }: AboutPage) => {
	return (
		<Layout>
			<Header
				title="About"
				description="Hey, I’m Ardha 👋. I'm a developer from Indonesia. I work at [Viska Vef](https://www.linkedin.com/company/viskavef/) as a Full Stack Web Developer. I usually work with React and Node.js. And yes, I love Typescript so much! Typescript has become my third language after Indonesian and English. I'm also interested in learning other programming languages such as Python and Go."
			/>
			<div className="container max-w-5xl px-6 mx-auto mt-20 md:px-0">
				<h2 className="mb-4 text-2xl font-bold md:text-3xl">
					Social Media
				</h2>
				<p>
					Curious what I&apos;m currently jamming to? Here&apos;s my
					top tracks on Spotify
				</p>
				<div className="grid grid-cols-1 mt-10 gap-x-5 sm:grid-cols-3">
					<Link href="https://instagram.com/ardhayudhatama">
						<a className="flex items-center">
							<div className="bg-[#f2f2f2] p-4 rounded-full m-4">
								<FaInstagram className="text-2xl text-[#E1306C]" />
							</div>
							<div>
								<div className="font-bold">Instagam</div>
								<div>adhayudhatama</div>
							</div>
						</a>
					</Link>
					<Link href="https://twitter.com/ardhaydhtm">
						<a className="flex items-center">
							<div className="bg-[#f2f2f2] p-4 rounded-full m-4">
								<FaTwitter className="text-2xl text-[#1DA1F2]" />
							</div>
							<div>
								<div className="font-bold">Twitter</div>
								<div>adydhtm</div>
							</div>
						</a>
					</Link>
					<Link href="https://www.tiktok.com/@ardhakk">
						<a className="flex items-center">
							<div className="bg-[#f2f2f2] p-4 rounded-full m-4">
								<FaTiktok className="text-2xl text-[#EE1D52]" />
							</div>
							<div>
								<div className="font-bold">Tiktok</div>
								<div>ardhakk</div>
							</div>
						</a>
					</Link>
					<Link href="https://github.com/devardha">
						<a className="flex items-center">
							<div className="bg-[#f2f2f2] p-4 rounded-full m-4">
								<FaGithub className="text-2xl text-[#333]" />
							</div>
							<div>
								<div className="font-bold">GitHub</div>
								<div>devardha</div>
							</div>
						</a>
					</Link>
					<Link href="https://www.youtube.com/channel/UCkhabHzs7D3wzoNvW9x4KnA">
						<a className="flex items-center">
							<div className="bg-[#f2f2f2] p-4 rounded-full m-4">
								<FaYoutube className="text-2xl text-[#FF0000]" />
							</div>
							<div>
								<div className="font-bold">YouTube</div>
								<div>Ardha Yudhatama</div>
							</div>
						</a>
					</Link>
					<Link href="linkedin.com/in/yudhatamaindra">
						<a className="flex items-center">
							<div className="bg-[#f2f2f2] p-4 rounded-full m-4">
								<FaLinkedin className="text-2xl text-[#0072b1]" />
							</div>
							<div>
								<div className="font-bold">Linkedin</div>
								<div>Yudhatama Indra Wardhana</div>
							</div>
						</a>
					</Link>
				</div>
			</div>
			<div className="container max-w-5xl px-6 mx-auto mt-20 md:px-0">
				<h2 className="mb-4 text-2xl font-bold md:text-3xl">
					Top Tracks
				</h2>
				<p>
					Curious what I&apos;m currently jamming to? Here&apos;s my
					top tracks on Spotify
				</p>
				<div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-3">
					{topTracks.map((track: TopTrack, index: number) => (
						<Link key={index} href={track.url}>
							<a className="flex">
								<div className="relative h-[100px] w-[100px] mr-5">
									<Image
										src={track.image.url}
										width={100}
										height={100}
										alt={track.name}
									/>
								</div>
								<div>
									<div className="font-bold">
										{track.name}
									</div>
									<div>
										{track.artist?.map((artist, index) => {
											return (
												<div key={index}>{artist}</div>
											);
										})}
									</div>
								</div>
							</a>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default About;

export async function getStaticProps() {
	const topTracks = await getSpotifyTopTracks();
	return {
		props: {
			topTracks,
		},
	};
}

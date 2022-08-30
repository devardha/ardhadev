import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
	children: ReactNode;
	title?: string;
}

const Layout = ({ children, title }: Props) => {
	return (
		<>
			<Head>
				<title>{title ? title : "Ardha Yudhatama"}</title>
			</Head>
			<Navbar />
			<main className="pt-10 mt-24 min-h-[45vh]">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

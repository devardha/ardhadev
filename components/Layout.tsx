import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Head>
				<title>Ardha Yudhatama</title>
			</Head>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;

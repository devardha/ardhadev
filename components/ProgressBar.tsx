import React, { useEffect, MutableRefObject, useState } from "react";

interface Props {
	element: MutableRefObject<null> | any;
}

function ProgressBar({ element }: Props) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [progress, setProgress] = useState(0);
	const [height, setHeight] = useState(1000);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (element) {
			setHeight(
				element.current.clientHeight - (element.current.offsetTop + 400)
			);
		}
	}, [setHeight, element, scrollPosition]);

	useEffect(() => {
		const progress = (scrollPosition / height) * 100;
		setProgress(progress);
	}, [scrollPosition, height]);

	return (
		<>
			<div
				className="fixed top-0 z-50 h-[6px] bg-blue-600"
				style={{ width: `${progress}%` }}
				ref={element}
			></div>
		</>
	);
}
export default ProgressBar;

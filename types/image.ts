interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	size: number;
	width: number;
	height: number;
}

export interface Image {
	id: string;
	attributes: {
		url: string;
		formats: {
			large: ImageFormat;
			medium: ImageFormat;
			small: ImageFormat;
			thumbnail: ImageFormat;
		}
	}
}
import { Image } from './image';

export interface Category {
	id: 1;
	attributes: {
		name: string;
		description: string;
		slug: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	}
}
export interface Article {
	id: string;
	attributes: {
		title: string;
		description: string;
		slug: string;
		cover: {
			data: Image
		};
		categories: {
			data: Category[]
		}
	}
}
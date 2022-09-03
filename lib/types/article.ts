import { Author } from './author';
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

export interface Block {
	id: string;
	__component: string;
	body: string;
}
export interface Article {
	id: string;
	attributes: {
		title: string;
		description: string;
		slug: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		cover: {
			data: Image
		};
		categories: {
			data: Category[]
		};
		blocks: Block[]
		author: {
			data: Author;
		}
	};
	publishedAt: string | null;
}
import { Image } from "./image";

export interface Author {
	id: 1,
	attributes: {
		name: string;
		email: string;
		createdAt:string;
		updatedAt: string;
		image: {
			data: Image;
		}
	}
}
interface SpotifyArtist {
	name: string;
}

interface SpotifyImage {
	url: string;
}

interface SpotifyAlbum {
	artists: SpotifyArtist[];
	name: string;
	images: SpotifyImage[];
	external_urls: {
		spotify: string;
	}
}

interface SpotifyTopTracks {
	album: SpotifyAlbum;
}

export interface SpotifyTopTrackResponse {
	items: SpotifyTopTracks[];
}

// API Response
export interface TopTrack {
	image: {
		height: number;
		width: number;
		url: string;
	};
	name: string;
	artist: string[];
	url: string;
}
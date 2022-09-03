import axios from 'axios';
import querystring from 'querystring';
import { SpotifyTopTrackResponse } from './types/spotify';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=18`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token,
  } = process.env;
  

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

export const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
		Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	});
  
	return response.json();
};
  
export const getSpotifyTopTracks = async () => {
	const { access_token } = await getAccessToken();

	const response: SpotifyTopTrackResponse = await axios.get(TOP_TRACKS_ENDPOINT, {
		headers: {
			'Authorization': `Bearer ${access_token}`,
		}
	}).then(res => res.data).catch(err => console.log(err));

	const data = response.items.map(item => {
		return {
			image: item.album.images[0],
			name: item.album.name,
			artist: item.album.artists.map(item => item.name),
			url: item.album.external_urls.spotify
		}
	});

	return data;
};

export const getSpotifyNowPlaying = async () => {
	const { access_token } = await getAccessToken();
  
	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
		Authorization: `Bearer ${access_token}`,
		},
	});
  };
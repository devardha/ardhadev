
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSpotifyNowPlaying } from '../../../utils/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await getSpotifyNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ data: { isPlaying: false } });
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item?.name || 'Not Playing';
    const artist = song.item?.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item?.album.name || 'Spotify';
    const albumImageUrl = song?.item.album.images[0].url;
    const songUrl = song.item?.external_urls.spotify;

    return res.status(200).json({
        data: {
          album,
          albumImageUrl,
          artist,
          isPlaying,
          songUrl,
          title,
        }
    });
}

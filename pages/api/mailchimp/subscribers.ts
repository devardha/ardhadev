
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
    try {
        const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;

		if (!API_KEY) {
			return res.status(400).json({ error: {
				message: 'Missing Mailchimp API Key'
			} });
		}

        const DATACENTER = API_KEY.split('-')[1];

        const response = await axios.get(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
            {
                headers: {
                    Authorization: `apikey ${API_KEY}`,
                },
            }
        );
        
        if (response.status >= 400) {
            return res.status(400).json({
				error: {
					message: `There was an error fetching the subscribers`
				}
            });
        }

        return res.status(200).json({ data: {
			total_items: response.data.total_items
		} });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

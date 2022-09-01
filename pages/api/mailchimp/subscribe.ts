
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: {
			message: 'Email is required'
		} });
    }

    try {
        const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;

		if (!API_KEY) {
			return res.status(400).json({ error: {
				message: 'Missing Mailchimp API Key'
			} });
		}

        const DATACENTER = API_KEY.split('-')[1];

        const data = {
            email_address: email,
            status: 'subscribed'
        };

        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
            {
                body: JSON.stringify(data),
                headers: {
                    Authorization: `apikey ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        );
        
        if (response.status >= 400) {
            return res.status(400).json({
				error: {
					message: `There was an error subscribing to the newsletter`
				}
            });
        }

        return res.status(201).json({ data: {
			message: 'Success! You are now subscribed to the newsletter.'
		} });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

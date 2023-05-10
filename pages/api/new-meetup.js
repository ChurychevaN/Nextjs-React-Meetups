//   /api/new-meetup

function handler( req, res ) {
	if (req.method === 'POST') {
		const data = req.body;

		const { img, title, address, description } = data;
	}
}

export default handler();
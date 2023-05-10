import MeetupDetail from '../../components/meetups/MeetupDetail';
import { Layout } from '../../components/layout/Layout';

export default function MeetupDetails() {
	return (
		<Layout>
			<MeetupDetail
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
				title="A First Meetup"
				address="Some address 5, 12345 Some City"
				description="This is a first meetup!!!!!!"
			/>
		</Layout>
	);
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;
	console.log(meetupId);

	return {
		props: {
			meetupData: {
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
				id: meetupId,
				title: 'A First Meetup',
				address: 'Some address 5, 12345 Some City',
				description: 'This is a first meetup!!!!!!',
			},
		},
	};
}


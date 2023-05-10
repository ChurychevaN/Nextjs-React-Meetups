import { MeetupList } from '../components/meetups/MeetupList.js';
import { Layout } from '../components/layout/Layout';
import { useEffect, useState } from 'react';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'Tis is first meetup!',
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 10, 12345 Some City',
		description: 'Tis is second meetup!',
	},
];

function HomePage( props ) {

	return (
		<Layout>
			<MeetupList meetups={ props.meetups } />
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 1,
	};
}

export default HomePage;
//our-domain.com/new-meetup
import { NewMeetupForm } from '../../components/meetups/NewMeetupForm.js';
import { Layout } from '../../components/layout/Layout';

function NewMeetupPage() {
	function addMeetupHandler( meetupData ) {
		console.log(meetupData);
	}

	return (
		<Layout>
			<NewMeetupForm onAddMeetup={ addMeetupHandler } />
		</Layout>
	);
}

export default NewMeetupPage;
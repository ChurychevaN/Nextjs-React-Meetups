//our-domain.com/new-meetup
import { NewMeetupForm } from '../../components/meetups/NewMeetupForm.js';

function NewMeetupPage() {
	function addMeetupHandler( meetupData ) {
		console.log(meetupData);
	}

	return (
		<NewMeetupForm onAddMeetup={ addMeetupHandler } />
	);
}

export default NewMeetupPage;
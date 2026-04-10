// IMPORTED FROM /contents/about FOLDER.
import AboutHeader from '../contents/about/AboutHeader.tsx';
import Mobility from '../contents/about/Mobility.tsx';
import Livelihood from '../contents/about/Livelihood.tsx';
import CoreValues from '../common/CoreValues.tsx';
import FrequentlyAskedQuestions from '../contents/about/FrequentlyAskedQuestions.tsx';

function About() {
	return (
		<>
			<AboutHeader />
			<Mobility />
			<Livelihood />
			<CoreValues headline='Our values' />
			<FrequentlyAskedQuestions />
		</>
	);
}

export default About;

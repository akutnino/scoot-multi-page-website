// IMPORTED FROM /contents/about FOLDER.
import AboutHeader from '../contents/about/AboutHeader.tsx';
import Description from '../contents/about/Description.tsx';
import CoreValues from '../common/CoreValues.tsx';
import FrequentlyAskedQuestions from '../contents/about/FrequentlyAskedQuestions.tsx';

function About() {
	return (
		<>
			<AboutHeader />
			<Description />
			<CoreValues headline='Our values' />
			<FrequentlyAskedQuestions />
		</>
	);
}

export default About;

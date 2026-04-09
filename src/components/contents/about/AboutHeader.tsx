import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import about_hero_desktop from '/src/assets/images/about-hero-desktop.jpg';
import white_circles from '/src/assets/patterns/white-circles.svg';

function AboutHeader() {
	return (
		<header className='aboutHeader'>
			<h1 className='aboutHeader__headline wrapper'>About</h1>

			<BackgroundPhoto
				className='aboutHeader__backgroundPhoto'
				src={about_hero_desktop}
				alt='Top view of a road intersection'
			/>

			<BackgroundImage
				className='aboutHeader__whiteCirclesImage'
				src={white_circles}
			/>
		</header>
	);
}

export default AboutHeader;

import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import careers_locations_hero_desktop from '/src/assets/images/careers-locations-hero-desktop.jpg';
import white_circles from '/src/assets/patterns/white-circles.svg';

function CareersHeader() {
	return (
		<header className='careersHeader'>
			<h1 className='careersHeader__headline'>Careers</h1>

			<BackgroundPhoto
				className='careersHeader__backgroundPhoto'
				src={careers_locations_hero_desktop}
				alt='Top view of a road intersection'
			/>

			<BackgroundImage
				className='careersHeader__whiteCirclesImage'
				src={white_circles}
			/>
		</header>
	);
}

export default CareersHeader;

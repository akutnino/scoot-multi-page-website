import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import careers_locations_hero_desktop from '/src/assets/images/careers-locations-hero-desktop.jpg';
import white_circles from '/src/assets/patterns/white-circles.svg';

function LocationsHeader() {
	return (
		<header>
			<h1 className='locationsHeader__headline'>Locations</h1>

			<BackgroundPhoto
				className='locationsHeader__backgroundPhoto'
				src={careers_locations_hero_desktop}
				alt='Top view of a road intersection'
			/>

			<BackgroundImage
				className='locationsHeader__whiteCirclesImage'
				src={white_circles}
			/>
		</header>
	);
}

export default LocationsHeader;

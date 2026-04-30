import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';

import world_map_desktop from '/src/assets/images/world-map-desktop.png';

function MapLocations() {
	return (
		<section className='mapLocations'>
			<div className='mapLocations__backgroundPhotoWrapper'>
				<BackgroundPhoto
					className='mapLocations__mapBackgroundPhoto'
					src={world_map_desktop}
					alt='world map outline photo'
				/>

				<div className='mapLocations__cityPointerWrapper wrapper'>
					<div className='mapLocations__cityWrapper'>
						<h1 className='mapLocations__city'>New York</h1>
						<div className='mapLocations__pointer' />
					</div>

					<div className='mapLocations__cityWrapper'>
						<h1 className='mapLocations__city'>London</h1>
						<div className='mapLocations__pointer' />
					</div>

					<div className='mapLocations__cityWrapper'>
						<h1 className='mapLocations__city'>Yokoyama</h1>
						<div className='mapLocations__pointer' />
					</div>

					<div className='mapLocations__cityWrapper'>
						<h1 className='mapLocations__city'>Jakarta</h1>
						<div className='mapLocations__pointer' />
					</div>
				</div>
			</div>

			<div className='mapLocations__contentWrapper wrapper'>
				<div className='mapLocations__descriptionWrapper'>
					<h1 className='mapLocations__headline'>Your city not listed?</h1>
					<p className='mapLocations__description'>
						If you’d like to see Scoot in your hometown, be sure to let us know. We track
						requests and plan launches based on demand. Feel free to message us by
						clicking the link or messaging us on social.
					</p>
				</div>

				<CallToActionButton className='mapLocations__messageUsButton'>
					Message Us
				</CallToActionButton>
			</div>
		</section>
	);
}

export default MapLocations;

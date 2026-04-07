import BackgroundImage from '../../common/BackgroundImage.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import near_you from '/src/assets/images/near-you.jpg';
import right_arrow from '/src/assets/patterns/right-arrow.svg';
import circle from '/src/assets/patterns/circle.svg';

function Expansion() {
	return (
		<section className='expansion'>
			<div className='expansion__backgroundImageWrapper'>
				<BackgroundImage
					className='expansion__circleImage'
					src={circle}
				/>

				<BackgroundImage
					className='expansion__rightArrowImage'
					src={right_arrow}
				/>

				<BackgroundPhoto
					className='expansion__nearYouImage'
					src={near_you}
					alt='Photo of buildings'
				/>
			</div>

			<div className='expansion__contentWrapper'>
				<div className='expansion__headlineWrapper'>
					<div className='expansion__descriptionWrapper'>
						<h1 className='expansion__headline'>Coming to a city near you</h1>
						<p className='expansion__description'>
							Scoot is available in 4 major cities so far. We’re expanding rapidly, so be
							sure to let us know if you want to see us in your hometown. We’re aiming to
							let our scooters loose on 23 cities over the coming year.
						</p>
					</div>

					<CallToActionButton className='expansion__callToActionButton'>
						Learn More
					</CallToActionButton>
				</div>
			</div>
		</section>
	);
}

export default Expansion;

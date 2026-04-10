import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import better_living from '/src/assets/images/better-living.jpg';
import right_arrow from '/src/assets/patterns/right-arrow.svg';
import circle from '/src/assets/patterns/circle.svg';

function Livelihood() {
	return (
		<section className='livelihood'>
			<div className='livelihood__backgroundImageWrapper'>
				<BackgroundImage
					className='livelihood__circleImage'
					src={circle}
				/>

				<BackgroundImage
					className='livelihood__rightArrowImage'
					src={right_arrow}
				/>

				<BackgroundPhoto
					className='livelihood__betterLivingPhoto'
					src={better_living}
					alt='Railway trains moving'
				/>
			</div>

			<div className='livelihood__contentWrapper wrapper'>
				<div className='livelihood__descriptionWrapper'>
					<h1 className='livelihood__headline'>Better urban living</h1>
					<p className='livelihood__description'>
						We’re helping connect cities and bring people closer together. Our scooters
						are also fully-electric and we offset the minimal carbon footprint for each
						ride.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Livelihood;

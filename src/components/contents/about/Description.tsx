import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import digital_era from '/src/assets/images/digital-era.jpg';
import better_living from '/src/assets/images/better-living.jpg';
import left_upward_arrow from '/src/assets/patterns/left-upward-arrow.svg';
import right_arrow from '/src/assets/patterns/right-arrow.svg';
import circle from '/src/assets/patterns/circle.svg';

function Description() {
	return (
		<section className='description'>
			<div className='description__wrapper'>
				<div className='description__contentWrapper'>
					<h1 className='description__headline'>Mobility for the digital era</h1>
					<p className='description__description'>
						Getting around should be simple (and even fun!) for everyone. We embrace
						technology to provide low cost, smart access to scooters at your fingertips.
					</p>
				</div>

				<div className='description__backgroundImageWrapper'>
					<BackgroundPhoto
						className='description__digitalEraPhoto'
						src={digital_era}
						alt='Person holding a phone'
					/>

					<BackgroundImage
						className='description__leftUpwardArrowImage'
						src={left_upward_arrow}
					/>

					<BackgroundImage
						className='description__circleImage'
						src={circle}
					/>
				</div>
			</div>

			<div className='description__wrapper'>
				<div className='description__backgroundImageWrapper'>
					<BackgroundPhoto
						className='description__betterLivingPhoto'
						src={better_living}
						alt='Railway trains moving'
					/>

					<BackgroundImage
						className='description__rightArrowImage'
						src={right_arrow}
					/>

					<BackgroundImage
						className='description__circleImage'
						src={circle}
					/>
				</div>

				<div className='description__contentWrapper'>
					<h1 className='description__headline'>Better urban living</h1>
					<p className='description__description'>
						We’re helping connect cities and bring people closer together. Our scooters
						are also fully-electric and we offset the minimal carbon footprint for each
						ride.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Description;

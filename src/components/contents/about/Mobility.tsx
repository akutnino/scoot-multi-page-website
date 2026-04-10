import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import digital_era from '/src/assets/images/digital-era.jpg';
import left_upward_arrow from '/src/assets/patterns/left-upward-arrow.svg';
import circle from '/src/assets/patterns/circle.svg';

function Mobility() {
	return (
		<section className='mobility'>
			<div className='mobility__contentWrapper wrapper'>
				<div className='mobility__descriptionWrapper'>
					<h1 className='mobility__headline'>Mobility for the digital era</h1>
					<p className='mobility__description'>
						Getting around should be simple (and even fun!) for everyone. We embrace
						technology to provide low cost, smart access to scooters at your fingertips.
					</p>
				</div>
			</div>

			<div className='mobility__backgroundImageWrapper'>
				<BackgroundPhoto
					className='mobility__digitalEraPhoto'
					src={digital_era}
					alt='Person holding a phone'
				/>

				<BackgroundImage
					className='mobility__leftUpwardArrowImage'
					src={left_upward_arrow}
				/>

				<BackgroundImage
					className='mobility__circleImage'
					src={circle}
				/>
			</div>
		</section>
	);
}

export default Mobility;

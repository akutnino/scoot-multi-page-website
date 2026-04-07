import BackgroundImage from '../../common/BackgroundImage.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import telemetry from '/src/assets/images/telemetry.jpg';
import left_downward_arrow from '/src/assets/patterns/left-downward-arrow.svg';
import circle from '/src/assets/patterns/circle.svg';

function Telemetry() {
	return (
		<section className='telemetry'>
			<div className='telemetry__contentWrapper'>
				<div className='telemetry__headlineWrapper'>
					<div className='telemetry__descriptionWrapper'>
						<h1 className='telemetry__headline'>Easy to use riding telemetry</h1>
						<p className='telemetry__description'>
							The Scoot app is available with riding telemetry. This means it can show you
							your average speed, how long you've been using the scooter, your traveling
							distance, and many more things all in an easy to use app.
						</p>
					</div>

					<CallToActionButton className='telemetry__callToActionButton'>
						Learn More
					</CallToActionButton>
				</div>
			</div>

			<div className='telemetry__backgroundImageWrapper'>
				<BackgroundPhoto
					className='telemetry__telemetryImage'
					src={telemetry}
					alt='Person holding a phone'
				/>

				<BackgroundImage
					className='telemetry__leftDownwardArrowImage'
					src={left_downward_arrow}
				/>

				<BackgroundImage
					className='telemetry__circleImage'
					src={circle}
				/>
			</div>
		</section>
	);
}

export default Telemetry;

import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';

import join_us from '/src/assets/images/join-us.jpg';
import left_downward_arrow from '/src/assets/patterns/left-downward-arrow.svg';
import circle from '/src/assets/patterns/circle.svg';

function Mission() {
	return (
		<section className='mission'>
			<div className='mission__headlineWrapper'>
				<div className='mission__contentWrapper'>
					<h1 className='mission__headline'>Easy to use riding mission</h1>
					<p className='mission__description'>
						The Scoot app is available with riding mission. This means it can show you
						your average speed, how long you've been using the scooter, your traveling
						distance, and many more things all in an easy to use app.
					</p>
				</div>

				<CallToActionButton className='mission__callToActionButton'>
					Learn More
				</CallToActionButton>
			</div>

			<div className='mission__backgroundImageWrapper'>
				<BackgroundPhoto
					className='mission__MissionImage'
					src={join_us}
					alt='Person talking to the team'
				/>

				<BackgroundImage
					className='mission__leftDownwardArrowImage'
					src={left_downward_arrow}
				/>

				<BackgroundImage
					className='mission__circleImage'
					src={circle}
				/>
			</div>
		</section>
	);
}

export default Mission;

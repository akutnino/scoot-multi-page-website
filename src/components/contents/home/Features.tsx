import BackgroundImage from '../../common/BackgroundImage.tsx';

import locate from '/src/assets/icons/locate.svg';
import scooter from '/src/assets/icons/scooter.svg';
import ride from '/src/assets/icons/ride.svg';

function Features() {
	return (
		<section className='features'>
			<div className='features__backgroundLinePattern' />

			<ul className='features__featureList'>
				<li className='features__featureItem'>
					<BackgroundImage
						className='features__featureIcon'
						src={locate}
					/>

					<div className='features__descriptionWrapper'>
						<h1 className='features__featureHeader'>Locate with app</h1>
						<p className='features__featureDescription'>
							Use the app to find the nearest scooter to you. We are continuously placing
							scooters in the areas with most demand, so one should never be too far away.
						</p>
					</div>
				</li>

				<li className='features__featureItem'>
					<BackgroundImage
						className='features__featureIcon'
						src={scooter}
					/>

					<div className='features__descriptionWrapper'>
						<h1 className='features__featureHeader'>Pick your scooter</h1>
						<p className='features__featureDescription'>
							We show the most important info for the scooters closest to you. So you know
							how much charge they have left and can see roughly how much it will cost.
						</p>
					</div>
				</li>

				<li className='features__featureItem'>
					<BackgroundImage
						className='features__featureIcon'
						src={ride}
					/>

					<div className='features__descriptionWrapper'>
						<h1 className='features__featureHeader'>Enjoy the ride</h1>
						<p className='features__featureDescription'>
							Scan the QR code and the bike will unlock. Retract the cable lock, put on a
							helmet, and you’re off! Always lock bikes away from walkways and
							accessibility ramps.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default Features;

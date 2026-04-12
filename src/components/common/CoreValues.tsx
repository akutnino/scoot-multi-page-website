import BackgroundPhoto from './BackgroundPhoto.tsx';

import our_tech from '/src/assets/images/our-tech.jpg';
import our_integrity from '/src/assets/images/our-integrity.jpg';
import our_community from '/src/assets/images/our-community.jpg';

function CoreValues({ headline }: { headline: string }) {
	return (
		<section className='coreValues wrapper'>
			<h1 className='coreValues__headline'>{headline}</h1>

			<ul className='coreValues__valueList'>
				<li className='coreValues__valueItem'>
					<div className='coreValues__backgroundPhotoWrapper'>
						<BackgroundPhoto
							className='coreValues__backgroundPhoto'
							src={our_tech}
							alt='Person holding a phone'
						/>
						<div className='coreValues__valueNumber'>01</div>
					</div>

					<div className='coreValues__descriptionWrapper'>
						<h2 className='coreValues__valueHeadline'>Our tech</h2>
						<p className='coreValues__valuedescription'>
							We’re using cutting edge technology to drive accessible urban transportation
							forward. Our fully electric scooters are a joy to ride!
						</p>
					</div>
				</li>

				<li className='coreValues__valueItem'>
					<div className='coreValues__backgroundPhotoWrapper'>
						<BackgroundPhoto
							className='coreValues__backgroundPhoto'
							src={our_integrity}
							alt='Person driving a scooter'
						/>
						<div className='coreValues__valueNumber'>02</div>
					</div>

					<div className='coreValues__descriptionWrapper'>
						<h2 className='coreValues__valueHeadline'>Our integrity</h2>
						<p className='coreValues__valuedescription'>
							We are fully committed to deliver a great yet safe, sustainable
							micro-mobility experience in every city we serve.
						</p>
					</div>
				</li>

				<li className='coreValues__valueItem'>
					<div className='coreValues__backgroundPhotoWrapper'>
						<BackgroundPhoto
							className='coreValues__backgroundPhoto'
							src={our_community}
							alt='People crossing the street'
						/>
						<div className='coreValues__valueNumber'>03</div>
					</div>

					<div className='coreValues__descriptionWrapper'>
						<h2 className='coreValues__valueHeadline'>Our community</h2>
						<p className='coreValues__valuedescription'>
							We support every community we serve. All workers are paid a living wage
							based on their location and are Scoot employees.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default CoreValues;

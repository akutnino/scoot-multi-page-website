import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';

import our_tech from '/src/assets/images/our-tech.jpg';
import our_integrity from '/src/assets/images/our-integrity.jpg';
import our_community from '/src/assets/images/our-community.jpg';

function Values() {
	return (
		<section className='values'>
			<h1 className='values__headline'>Our values</h1>

			<ul className='values__valueList'>
				<li className='values__valueItem'>
					<div className='values__backgroundPhotoWrapper'>
						<BackgroundPhoto
							className='values__backgroundPhoto'
							src={our_tech}
							alt='Person holding a phone'
						/>
						<div className='values__valueNumber'>01</div>
					</div>

					<div className='values__descriptionWrapper'>
						<h2 className='values__valueHeadline'>Our tech</h2>
						<p className='values__valuedescription'>
							We’re using cutting edge technology to drive accessible urban transportation
							forward. Our fully electric scooters are a joy to ride!
						</p>
					</div>
				</li>

				<li className='values__valueItem'>
					<div className='values__backgroundPhotoWrapper'>
						<BackgroundPhoto
							className='values__backgroundPhoto'
							src={our_integrity}
							alt='Person driving a scooter'
						/>
						<div className='values__valueNumber'>02</div>
					</div>

					<div className='values__descriptionWrapper'>
						<h2 className='values__valueHeadline'>Our integrity</h2>
						<p className='values__valuedescription'>
							We are fully committed to deliver a great yet safe, sustainable
							micro-mobility experience in every city we serve.
						</p>
					</div>
				</li>

				<li className='values__valueItem'>
					<div className='values__backgroundPhotoWrapper'>
						<BackgroundPhoto
							className='values__backgroundPhoto'
							src={our_community}
							alt='People crossing the street'
						/>
						<div className='values__valueNumber'>03</div>
					</div>

					<div className='values__descriptionWrapper'>
						<h2 className='values__valueHeadline'>Our community</h2>
						<p className='values__valuedescription'>
							We support every community we serve. All workers are paid a living wage
							based on their location and are Scoot employees.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default Values;

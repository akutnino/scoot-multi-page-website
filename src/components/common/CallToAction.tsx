import { Link } from 'react-router';

import BackgroundImage from './BackgroundImage.tsx';

import app_store from '/src/assets/icons/app-store.svg';
import google_play from '/src/assets/icons/google-play.svg';
import semi_circles from '/src/assets/patterns/semi-circles.svg';

function CallToAction() {
	return (
		<section className='callToAction'>
			<div className='callToAction__wrapper wrapper'>
				<h1 className='callToAction__headline'>Sign up and Scoot off today</h1>

				<ul className='callToAction__navLinks'>
					<li className='callToAction__navItem'>
						<Link
							className='callToAction__iconLink'
							target='_blank'
							to={'https://play.google.com/'}
						>
							<BackgroundImage
								className='callToAction__iconImage'
								src={app_store}
							/>
						</Link>
					</li>

					<li className='callToAction__navItem'>
						<Link
							className='callToAction__iconLink'
							target='_blank'
							to={'https://www.apple.com/app-store/'}
						>
							<BackgroundImage
								className='callToAction__iconImage'
								src={google_play}
							/>
						</Link>
					</li>
				</ul>
			</div>

			<BackgroundImage
				className='callToAction__backgroundImage'
				src={semi_circles}
			/>
		</section>
	);
}

export default CallToAction;

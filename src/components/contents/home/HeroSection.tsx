import BackgroundImage from '../../common/BackgroundImage.tsx';
import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';

import home_hero_desktop from '/src/assets/images/home-hero-desktop.jpg';
import line from '/src/assets/patterns/line.svg';
import right_arrow from '/src/assets/patterns/right-arrow.svg';
import white_circles from '/src/assets/patterns/white-circles.svg';

function HeroSection() {
	return (
		<header className='heroSection'>
			<div className='heroSection__container wrapper'>
				<section className='heroSection__headlineWrapper'>
					<h1 className='heroSection__headline'>Scooter sharing made simple</h1>

					<div className='heroSection__descriptionWrapper'>
						<p className='heroSection__description'>
							Scoot takes the hassle out of urban mobility. Our bikes are placed in
							convenient locations in each of our cities. Use our app to locate the
							nearest bike, unlock it with a tap, and you’re away!
						</p>

						<CallToActionButton className='heroSection__callToActionButton'>
							Get Scootin
						</CallToActionButton>
					</div>
				</section>
			</div>

			<BackgroundPhoto
				className='heroSection__backgroundPhoto'
				src={home_hero_desktop}
				alt='Person driving a scooter'
			/>

			<BackgroundImage
				className='heroSection__lineImage'
				src={line}
			/>

			<BackgroundImage
				className='heroSection__rightArrowImage'
				src={right_arrow}
			/>

			<BackgroundImage
				className='heroSection__whiteCirclesImage'
				src={white_circles}
			/>
		</header>
	);
}

export default HeroSection;

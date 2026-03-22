import BackgroundImage from '../../common/BackgroundImage.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';

import payments from '/src/assets/images/payments.jpg';
import left_downward_arrow from '/src/assets/patterns/left-downward-arrow.svg';
import circle from '/src/assets/patterns/circle.svg';

function Payments() {
	return (
		<section className='payments'>
			<div className='payments__headlineWrapper'>
				<div className='payments__contentWrapper'>
					<h1 className='payments__headline'>Zero hassle payments</h1>
					<p className='payments__description'>
						Our payment is as easy as one two three. We accept most credit cards and debit
						cards. You can also link your PayPal account inside the app. Need to pay
						later? No worries! You can defer payment for up to a month.
					</p>
				</div>

				<CallToActionButton className='payments__callToActionButton'>
					Learn More
				</CallToActionButton>
			</div>

			<div className='payments__backgroundImageWrapper'>
				<BackgroundImage
					className='payments__paymentsImage'
					src={payments}
				/>

				<BackgroundImage
					className='payments__leftDownwardArrowImage'
					src={left_downward_arrow}
				/>

				<BackgroundImage
					className='payments__circleImage'
					src={circle}
				/>
			</div>
		</section>
	);
}

export default Payments;

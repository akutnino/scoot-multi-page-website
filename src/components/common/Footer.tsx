import { Link } from 'react-router';

import LogoImage from './LogoImage.tsx';
import BackgroundImage from './BackgroundImage.tsx';

import facebook from '/src/assets/icons/facebook.svg';
import instagram from '/src/assets/icons/instagram.svg';
import twitter from '/src/assets/icons/twitter.svg';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__navListWrapper'>
					<Link to={'/'}>
						<LogoImage className='footer__logoImage' />
					</Link>

					<ul className='footer__navList'>
						<li className='footer__navItem'>
							<Link to={'/about'}>About</Link>
						</li>

						<li className='footer__navItem'>
							<Link to={'/careers'}>Careers</Link>
						</li>

						<li className='footer__navItem'>
							<Link to={'/locations'}>Locations</Link>
						</li>
					</ul>
				</div>

				<ul className='footer__navLinks'>
					<li className='footer__navItem'>
						<Link
							className='footer__iconLink'
							target='_blank'
							to={'https://www.facebook.com/'}
						>
							<BackgroundImage
								className='footer__iconImage'
								src={facebook}
							/>
						</Link>
					</li>

					<li className='footer__navItem'>
						<Link
							className='footer__iconLink'
							target='_blank'
							to={'https://x.com/'}
						>
							<BackgroundImage
								className='footer__iconImage'
								src={instagram}
							/>
						</Link>
					</li>

					<li className='footer__navItem'>
						<Link
							className='footer__iconLink'
							target='_blank'
							to={'https://www.instagram.com/'}
						>
							<BackgroundImage
								className='footer__iconImage'
								src={twitter}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;

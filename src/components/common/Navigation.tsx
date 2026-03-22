import { Link } from 'react-router';

import LogoImage from './LogoImage.tsx';
import CallToActionButton from './CallToActionButton.tsx';

function Navigation() {
	return (
		<nav className='navigation'>
			<div className='navigation__wrapper'>
				<div className='navigation__navListWrapper'>
					<Link to={'/'}>
						<LogoImage className='navigation__logoImage' />
					</Link>

					<ul className='navigation__navList'>
						<li className='navigation__navItem'>
							<Link to={'/about'}>About</Link>
						</li>

						<li className='navigation__navItem'>
							<Link to={'/careers'}>Careers</Link>
						</li>

						<li className='navigation__navItem'>
							<Link to={'/locations'}>Locations</Link>
						</li>
					</ul>
				</div>

				<CallToActionButton className='navigation__callToActionButton'>
					Get Scootin
				</CallToActionButton>
			</div>
		</nav>
	);
}

export default Navigation;

import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigation } from '../../stores/selectors/navigationSelectors.ts';
import type { AppDispatch } from '../../_types/stores/types.ts';
import type { NavigationInitialStateType } from '../../_types/stores/reducers/navigation-types.ts';
import { navigationToggleDialog } from '../../stores/actions/navigationActions.ts';

import LogoImage from './LogoImage.tsx';
import CallToActionButton from './CallToActionButton.tsx';
import BackgroundImage from './BackgroundImage.tsx';

import hamburger from '/src/assets/icons/hamburger.svg';
import close from '/src/assets/icons/close.svg';

function Navigation() {
	const dispatch: AppDispatch = useDispatch();

	const { isIconToggled }: NavigationInitialStateType = useSelector(selectNavigation);

	const handleDialogToggle = () => {
		dispatch(navigationToggleDialog());
	};

	return (
		<nav className='navigation '>
			<div className='navigation__wrapper wrapper'>
				<div className='navigation__navListWrapper'>
					<button
						className='navigation__openButton'
						type='button'
						title='button'
						onClick={handleDialogToggle}
						aria-label='open modal'
					>
						{isIconToggled ? (
							<BackgroundImage
								className='navigation__buttonImage--toggled'
								src={close}
							/>
						) : (
							<BackgroundImage
								className='navigation__buttonImage--isToggled'
								src={hamburger}
							/>
						)}
					</button>

					<Link
						className='navigation__logoLink'
						to={'/'}
					>
						<LogoImage className='navigation__logoImage' />
					</Link>

					<ul className='navigation__navList'>
						<li className='navigation__navItem'>
							<Link
								className='navigation__navLink'
								to={'/about'}
							>
								About
							</Link>
						</li>

						<li className='navigation__navItem'>
							<Link
								className='navigation__navLink'
								to={'/careers'}
							>
								Careers
							</Link>
						</li>

						<li className='navigation__navItem'>
							<Link
								className='navigation__navLink'
								to={'/locations'}
							>
								Locations
							</Link>
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

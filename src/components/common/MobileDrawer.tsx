import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigation } from '../../stores/selectors/navigationSelectors.ts';
import { navigationToggleDialog } from '../../stores/actions/navigationActions.ts';
import type { AppDispatch } from '../../_types/stores/types.ts';
import type { NavigationInitialStateType } from '../../_types/stores/reducers/navigation-types.ts';

import CallToActionButton from './CallToActionButton.tsx';

function MobileDrawer() {
	const dispatch: AppDispatch = useDispatch();
	const dialogRef = useRef<HTMLDialogElement>(null);

	const { isIconToggled }: NavigationInitialStateType = useSelector(selectNavigation);

	const handleLinkNavigation = () => {
		dispatch(navigationToggleDialog());
	};

	useEffect(() => {
		const dialogElement: HTMLDialogElement | null = dialogRef.current;

		if (dialogElement === null) return;

		const mediaQuery = window.matchMedia('(min-width: 720px)');

		const handleMediaChange = () => {
			if (dialogElement.hasAttribute('open')) dispatch(navigationToggleDialog());
		};

		mediaQuery.addEventListener('change', handleMediaChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaChange);
		};
	});

	return (
		<>
			{isIconToggled && <div className='mobileDrawer__overlay' />}

			<dialog
				className='mobileDrawer__dialog'
				open={isIconToggled ? true : false}
				ref={dialogRef}
				role='dialog'
			>
				<ul className='mobileDrawer__navList'>
					<li className='mobileDrawer__navItem'>
						<Link
							className='mobileDrawer__navLink'
							to={'/about'}
							onClick={handleLinkNavigation}
						>
							About
						</Link>
					</li>

					<li className='mobileDrawer__navItem'>
						<Link
							className='mobileDrawer__navLink'
							to={'/careers'}
							onClick={handleLinkNavigation}
						>
							Careers
						</Link>
					</li>

					<li className='mobileDrawer__navItem'>
						<Link
							className='mobileDrawer__navLink'
							to={'/locations'}
							onClick={handleLinkNavigation}
						>
							Locations
						</Link>
					</li>
				</ul>

				<CallToActionButton className='mobileDrawer__callToActionButton'>
					Get Scootin
				</CallToActionButton>
			</dialog>
		</>
	);
}

export default MobileDrawer;

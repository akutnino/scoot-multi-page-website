import { useEffect, useRef, useState } from 'react';

import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';

import world_map_desktop from '/src/assets/images/world-map-desktop.png';

// const componentObserver = new ResizeObserver(callback);
// componentObserver.observe(ref.current);
// componentObserver.disconnect();

function MapLocations() {
	/**
	 * the max width of the component is 1300px
	 * the width of the citywrapper is 190px
	 *
	 * i need to track the changes in width of the component.
	 * by maybe using a useref or usestate. but i dont know which one to use.
	 * let me think.
	 *
	 * first, i need to store the component's width value. useref or usestate?
	 * i think useref bc i dont need it to cause a rerender just yet...
	 *
	 * so the dynamic width value of the component will be stored in a useref.
	 * beacuse it can be increased or decreased without rerenders.
	 *
	 * on the other hand, wait let me think...
	 * if the the component width decreses,
	 */

	const [componentWidth, setComponentWidth] = useState<number | null>(null);
	const [componentHeight, setComponentHeight] = useState<number | null>(null);

	const commponentRef = useRef<HTMLSelectElement>(null);
	const newYorkRef = useRef<HTMLDivElement>(null);
	const londonRef = useRef<HTMLDivElement>(null);
	const yokohamaRef = useRef<HTMLDivElement>(null);
	const jakartaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const COMPONENT_MAX_WIDTH: number = 1300;
		const LOCATION_MAX_HEIGHT: number = 90;
		const LOCATION_MIN_HEIGHT: number = 32;

		const [
			NewYorkElement,
			LondonElement,
			YokohamaElement,
			JakartaElement,
		]: HTMLCollectionOf<Element> = document.getElementsByClassName(
			'mapLocations__cityWrapper'
		);

		const handleComponentResize = (entries: ResizeObserverEntry[]) => {
			const entry: ResizeObserverEntry = entries[0];
			const UPDATED_COMPONENT_WIDTH: number = entry.contentRect.width;

			if (UPDATED_COMPONENT_WIDTH < COMPONENT_MAX_WIDTH) {
				console.log(componentWidth);
				setComponentWidth(UPDATED_COMPONENT_WIDTH);
			}
		};

		const handleLocationsResize = (entries: ResizeObserverEntry[]) => {
			const entry: ResizeObserverEntry = entries[0];
			const UPDATED_LOCATION_COMPONENT_HEIGHT: number = entry.contentRect.height;

			if (componentWidth === null) return;
			setComponentHeight(UPDATED_LOCATION_COMPONENT_HEIGHT);

			if (
				componentWidth < COMPONENT_MAX_WIDTH &&
				UPDATED_LOCATION_COMPONENT_HEIGHT <= LOCATION_MAX_HEIGHT &&
				UPDATED_LOCATION_COMPONENT_HEIGHT > LOCATION_MIN_HEIGHT
			) {
				if (componentHeight === null) return;
				console.log(componentHeight);

				//MAYBE USE USEREF TO ACCESS THE PREVIOUS STATE?!
				const updatedHeight =
					UPDATED_LOCATION_COMPONENT_HEIGHT > componentHeight
						? componentHeight - 1
						: componentHeight + 1;

				NewYorkElement.setAttribute('style', `height: ${updatedHeight}px`);
			}
		};

		const componentObserver = new ResizeObserver(handleComponentResize);
		const NewYorkObserver = new ResizeObserver(handleLocationsResize);

		if (commponentRef.current === null || newYorkRef.current === null) return;
		componentObserver.observe(commponentRef.current);
		NewYorkObserver.observe(newYorkRef.current);

		return () => {
			componentObserver.disconnect();
			NewYorkObserver.disconnect();
		};
	}, [componentWidth, componentHeight]);

	return (
		<section
			className='mapLocations wrapper'
			ref={commponentRef}
		>
			<div className='mapLocations__backgroundPhotoWrapper'>
				<BackgroundPhoto
					className='mapLocations__mapBackgroundPhoto'
					src={world_map_desktop}
					alt='world map outline photo'
				/>

				<div
					className='mapLocations__cityWrapper'
					ref={newYorkRef}
				>
					<h1 className='mapLocations__city'>New York</h1>
					<div className='mapLocations__pointer' />
				</div>

				<div
					className='mapLocations__cityWrapper'
					ref={londonRef}
				>
					<h1 className='mapLocations__city'>London</h1>
					<div className='mapLocations__pointer' />
				</div>

				<div
					className='mapLocations__cityWrapper'
					ref={yokohamaRef}
				>
					<h1 className='mapLocations__city'>Yokoyama</h1>
					<div className='mapLocations__pointer' />
				</div>

				<div
					className='mapLocations__cityWrapper'
					ref={jakartaRef}
				>
					<h1 className='mapLocations__city'>Jakarta</h1>
					<div className='mapLocations__pointer' />
				</div>
			</div>

			<div className='mapLocations__contentWrapper'>
				<div className='mapLocations__descriptionWrapper'>
					<h1 className='mapLocations__headline'>Your city not listed?</h1>
					<p className='mapLocations__description'>
						If you’d like to see Scoot in your hometown, be sure to let us know. We track
						requests and plan launches based on demand. Feel free to message us by
						clicking the link or messaging us on social.
					</p>
				</div>

				<CallToActionButton className='mapLocations__messageUsButton'>
					Message Us
				</CallToActionButton>
			</div>
		</section>
	);
}

export default MapLocations;

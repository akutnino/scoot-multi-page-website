import { useEffect, useRef, useState } from 'react';

import BackgroundPhoto from '../../common/BackgroundPhoto.tsx';
import CallToActionButton from '../../common/CallToActionButton.tsx';

import world_map_desktop from '/src/assets/images/world-map-desktop.png';

function MapLocations() {
	const [componentWidth, setComponentWidth] = useState<number | null>(null);
	const mapLocationsRef = useRef<HTMLSelectElement>(null);

	const newYorkPinRef = useRef<HTMLDivElement>(null);
	const londonPinRef = useRef<HTMLDivElement>(null);
	const yokohamaPinRef = useRef<HTMLDivElement>(null);
	const jakartaPinRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const [
			NewYorkDivElement,
			LondonDivElement,
			YokohamaDivElement,
			JakartaDivElement,
		]: HTMLCollectionOf<Element> = document.getElementsByClassName(
			'mapLocations__cityWrapper'
		);

		const handleComponentResize = (entries: ResizeObserverEntry[]) => {
			const entry: ResizeObserverEntry = entries[0];
			const mapLocationsWidth: number = entry.contentRect.width;

			if (mapLocationsWidth < 1300) {
				console.log(mapLocationsWidth);
				setComponentWidth(mapLocationsWidth);
			}
		};

		const handleLocationsResize = (entries: ResizeObserverEntry[]) => {
			const entry: ResizeObserverEntry = entries[0];
			const cityWrapperHeight: number = entry.contentRect.height;

			if (componentWidth === null) return;
			if (componentWidth < 1300 && cityWrapperHeight <= 90 && cityWrapperHeight >= 32) {
				console.log(cityWrapperHeight);

				//MAYBE USE USEREF TO ACCESS THE PREVIOUS STATE?!
				NewYorkDivElement.setAttribute('style', `height: ${cityWrapperHeight - 1}px`);
				LondonDivElement.setAttribute('style', `height: ${cityWrapperHeight - 1}px`);
				YokohamaDivElement.setAttribute('style', `height: ${cityWrapperHeight - 1}px`);
				JakartaDivElement.setAttribute('style', `height: ${cityWrapperHeight - 1}px`);
			}
		};

		const componentObserver = new ResizeObserver(handleComponentResize);
		const NewYorkDivObserver = new ResizeObserver(handleLocationsResize);
		const LondonDivObserver = new ResizeObserver(handleLocationsResize);
		const YokohamaDivObserver = new ResizeObserver(handleLocationsResize);
		const JakartaDivObserver = new ResizeObserver(handleLocationsResize);

		if (mapLocationsRef.current === null) return;
		if (newYorkPinRef.current === null) return;
		if (londonPinRef.current === null) return;
		if (yokohamaPinRef.current === null) return;
		if (jakartaPinRef.current === null) return;

		componentObserver.observe(mapLocationsRef.current);
		NewYorkDivObserver.observe(newYorkPinRef.current);
		LondonDivObserver.observe(londonPinRef.current);
		YokohamaDivObserver.observe(yokohamaPinRef.current);
		JakartaDivObserver.observe(jakartaPinRef.current);

		return () => {
			componentObserver.disconnect();
			NewYorkDivObserver.disconnect();
			LondonDivObserver.disconnect();
			YokohamaDivObserver.disconnect();
			JakartaDivObserver.disconnect();
		};
	}, [componentWidth]);

	return (
		<section
			className='mapLocations wrapper'
			ref={mapLocationsRef}
		>
			<div className='mapLocations__backgroundPhotoWrapper'>
				<BackgroundPhoto
					className='mapLocations__mapBackgroundPhoto'
					src={world_map_desktop}
					alt='world map outline photo'
				/>

				<div
					className='mapLocations__cityWrapper'
					ref={newYorkPinRef}
				>
					<h1 className='mapLocations__city'>New York</h1>
					<div className='mapLocations__pointer' />
				</div>

				<div
					className='mapLocations__cityWrapper'
					ref={londonPinRef}
				>
					<h1 className='mapLocations__city'>London</h1>
					<div className='mapLocations__pointer' />
				</div>

				<div
					className='mapLocations__cityWrapper'
					ref={yokohamaPinRef}
				>
					<h1 className='mapLocations__city'>Yokoyama</h1>
					<div className='mapLocations__pointer' />
				</div>

				<div
					className='mapLocations__cityWrapper'
					ref={jakartaPinRef}
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

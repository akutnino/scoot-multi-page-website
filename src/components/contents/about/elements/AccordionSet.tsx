import { type MouseEvent, type ReactNode } from 'react';

import BackgroundImage from '../../../common/BackgroundImage.tsx';

import chevron from '/src/assets/icons/chevron.svg';

function AccordionSet({
	onclick,
	isOpen,
	question,
	children,
}: {
	onclick: (event: MouseEvent<HTMLButtonElement>) => void;
	isOpen: boolean;
	question: string;
	children: ReactNode;
}) {
	return (
		<div className='accordion'>
			<button
				className='accordion__toggleButton'
				type='button'
				onClick={onclick}
			>
				<h1 className='accordion__question'>{question}</h1>
				<BackgroundImage
					className='accordion__chevronImage'
					src={chevron}
				/>
			</button>
			{isOpen && <p className='accordion__answer'>{children}</p>}
		</div>
	);
}

export default AccordionSet;

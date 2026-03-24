import { useState, type ReactNode } from 'react';

import BackgroundImage from '../../../common/BackgroundImage.tsx';

import chevron from '/src/assets/icons/chevron.svg';

function Accordion({ question, children }: { question: string; children: ReactNode }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggle = () => {
		setIsOpen((currentState) => !currentState);
	};

	return (
		<div className='accordion'>
			<button
				className='accordion__toggleButton'
				type='button'
				onClick={handleToggle}
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

export default Accordion;

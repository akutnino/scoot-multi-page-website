import { useState, type ReactNode } from 'react';

import BackgroundImage from '../../../common/BackgroundImage.tsx';

import chevron from '/src/assets/icons/chevron.svg';

function Accordion({ question, children }: { question: string; children: ReactNode }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [btnClassName, setBtnClassName] = useState<string>('');

	const handleToggle = () => {
		setIsOpen((currentState) => !currentState);
	};

	const handleMouseEnter = () => {
		setBtnClassName('hovered');
	};

	const handleMouseLeave = () => {
		setBtnClassName('');
	};

	return (
		<div
			className={`accordion accordion--${btnClassName}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<button
				className={`accordion__toggleButton accordion__toggleButton--${btnClassName}`}
				type='button'
				onClick={handleToggle}
			>
				<h1 className={`accordion__question accordion__question--${btnClassName}`}>
					{question}
				</h1>
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

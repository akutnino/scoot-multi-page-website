import { useState, type MouseEvent, type ReactNode } from 'react';

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
	const [btnClassName, setBtnClassName] = useState<string>('');

	const handleMouseEnter = () => {
		setBtnClassName('hovered');
	};

	const handleMouseLeave = () => {
		setBtnClassName('');
	};

	return (
		<div
			className={`accordionSet accordionSet--${btnClassName}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<button
				className={`accordionSet__toggleButton accordionSet__toggleButton--${btnClassName}`}
				type='button'
				onClick={onclick}
			>
				<h1 className={`accordionSet__question accordionSet__question--${btnClassName}`}>
					{question}
				</h1>
				<BackgroundImage
					className='accordionSet__chevronImage'
					src={chevron}
				/>
			</button>
			{isOpen && <p className='accordionSet__answer'>{children}</p>}
		</div>
	);
}

export default AccordionSet;

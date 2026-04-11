import { useState, type ReactNode } from 'react';

function CallToActionButton({
	className,
	children,
}: {
	className: string;
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
		<button
			className={`${className} ${className}--${btnClassName}`}
			type='button'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</button>
	);
}

export default CallToActionButton;

import type { ReactNode } from 'react';

function CallToActionButton({
	className,
	children,
}: {
	className: string;
	children: ReactNode;
}) {
	return (
		<button
			className={className}
			type='button'
		>
			{children}
		</button>
	);
}

export default CallToActionButton;

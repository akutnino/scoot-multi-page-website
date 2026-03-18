import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation, type Location } from 'react-router';

// IMPORTED FROM /pages FOLDER.
import Home from '../pages/Home.tsx';

// IMPORTED FROM THE SAME FOLDER.
import AppLayoutSpinner from './AppLayoutSpinner.tsx';

function SuspenseWrapper({ children }: { children: ReactNode }) {
	const location: Location = useLocation();

	return (
		<ErrorBoundary
			key={location.key}
			fallback={<Home />}
		>
			<Suspense
				key={location.key}
				fallback={<AppLayoutSpinner />}
			>
				{children}
			</Suspense>
		</ErrorBoundary>
	);
}

export default SuspenseWrapper;

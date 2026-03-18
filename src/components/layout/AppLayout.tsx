import type { ReactNode } from 'react';

// IMPORTED FROM /common FOLDER.
import Navigation from '../common/Navigation.tsx';
import CallToAction from '../common/CallToAction.tsx';
import Footer from '../common/Footer.tsx';

// IMPORTED FROM THE SAME FOLDER.
import OutletWrapper from './OutletWrapper.tsx';

function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navigation />
			<OutletWrapper>{children}</OutletWrapper>
			<CallToAction />
			<Footer />
		</>
	);
}

export default AppLayout;

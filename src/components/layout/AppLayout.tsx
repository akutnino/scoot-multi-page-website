import type { ReactNode } from 'react';

// IMPORTED FROM /common FOLDER.
import Navigation from '../common/Navigation.tsx';
import CallToAction from '../common/CallToAction.tsx';
import Footer from '../common/Footer.tsx';

function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navigation />
			<main>{children}</main>
			<CallToAction />
			<Footer />
		</>
	);
}

export default AppLayout;

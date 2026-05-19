import { Outlet } from 'react-router';

// IMPORTED FROM THE SAME FOLDER.
import AppLayout from './AppLayout.tsx';
import SuspenseWrapper from './SuspenseWrapper.tsx';
import MobileDrawer from '../common/MobileDrawer.tsx';

function AppLayoutWrapper() {
	return (
		<SuspenseWrapper>
			<AppLayout>
				<MobileDrawer />
				<Outlet />
			</AppLayout>
		</SuspenseWrapper>
	);
}

export default AppLayoutWrapper;

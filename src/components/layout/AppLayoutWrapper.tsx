import { Outlet } from 'react-router';

// IMPORTED FROM THE SAME FOLDER.
import AppLayout from './AppLayout.tsx';
import SuspenseWrapper from './SuspenseWrapper.tsx';

function AppLayoutWrapper() {
	return (
		<SuspenseWrapper>
			<AppLayout>
				<Outlet />
			</AppLayout>
		</SuspenseWrapper>
	);
}

export default AppLayoutWrapper;

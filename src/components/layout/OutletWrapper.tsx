import type { ReactNode } from 'react';

function OutletWrapper({ children }: { children: ReactNode }) {
	return <main>{children}</main>;
}

export default OutletWrapper;

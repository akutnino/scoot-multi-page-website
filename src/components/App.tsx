import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Home from './pages/Home.tsx';
import AppLayoutWrapper from './layout/AppLayoutWrapper.tsx';

const About = lazy(() => import('./pages/About.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));
const Locations = lazy(() => import('./pages/Locations.tsx'));

function App() {
	return (
		<BrowserRouter basename='/scoot-multi-page-website'>
			<Routes>
				<Route
					path='/'
					element={<AppLayoutWrapper />}
				>
					<Route
						index={true}
						element={<Home />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='careers'
						element={<Careers />}
					/>
					<Route
						path='locations'
						element={<Locations />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

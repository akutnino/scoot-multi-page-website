import { Link } from 'react-router';

function Navigation() {
	return (
		<nav>
			Navigation
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Link to={'/careers'}>Careers</Link>
			<Link to={'/locations'}>Locations</Link>
		</nav>
	);
}

export default Navigation;

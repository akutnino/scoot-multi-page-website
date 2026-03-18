import { Link } from 'react-router';

function Navigation() {
	return (
		<div>
			Navigation
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Link to={'/careers'}>Careers</Link>
			<Link to={'/locations'}>Locations</Link>
		</div>
	);
}

export default Navigation;

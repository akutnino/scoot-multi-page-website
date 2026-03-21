import logo from '/src/assets/logo.svg';

function LogoImage({ className }: { className: string }) {
	return (
		<img
			className={className}
			src={logo}
			alt='scoot logo image'
			fetchPriority='high'
		/>
	);
}

export default LogoImage;

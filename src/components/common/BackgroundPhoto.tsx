function BackgroundPhoto({
	className,
	src,
	alt,
}: {
	className: string;
	src: string;
	alt: string;
}) {
	return (
		<img
			className={className}
			src={src}
			alt={alt}
			fetchPriority='high'
		/>
	);
}

export default BackgroundPhoto;

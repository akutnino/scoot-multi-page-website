import CallToActionButton from '../../../common/CallToActionButton.tsx';

function JobPost({
	jobPosition,
	jobLocation,
}: {
	jobPosition: string;
	jobLocation: string;
}) {
	return (
		<article className='jobPost'>
			<div className='jobPost_wrapper'>
				<div className='jobPost__descriptionWrapper'>
					<h1 className='jobPost__jobPosition'>{jobPosition}</h1>
					<p className='jobPost__jobLocation'>{jobLocation}</p>
				</div>

				<CallToActionButton className='jobPost'>Apply</CallToActionButton>
			</div>
		</article>
	);
}

export default JobPost;

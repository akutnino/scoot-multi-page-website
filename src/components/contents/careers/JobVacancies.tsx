import JobPost from './elements/JobPost.tsx';

function JobVacancies() {
	return (
		<section className='jobVacancies'>
			<JobPost
				jobPosition='General Manager'
				jobLocation='Jakarta, Indonesia'
			/>

			<JobPost
				jobPosition='UI/UX Designer'
				jobLocation='Yokohama, Japan'
			/>

			<JobPost
				jobPosition='Blog Content Copywriter'
				jobLocation='New York, United States'
			/>

			<JobPost
				jobPosition='Graphic  Designer'
				jobLocation='New York, United States'
			/>

			<JobPost
				jobPosition='Fleet Supervisor'
				jobLocation='Jakarta, Indonesia'
			/>

			<JobPost
				jobPosition='UX Analyst'
				jobLocation='London, United Kingdom'
			/>
		</section>
	);
}
export default JobVacancies;

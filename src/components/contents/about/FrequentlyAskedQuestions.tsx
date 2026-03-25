import { useEffect, useRef, useState } from 'react';

import Accordion from './elements/Accordion.tsx';
import AccordionSet from './elements/AccordionSet.tsx';

function FrequentlyAskedQuestions() {
	const [accordions, setAccordions] = useState<boolean[]>([]);
	const accordionWrapperRef = useRef<HTMLDivElement>(null);

	const handleToggle = (accordionID: number) => {
		return () => {
			setAccordions((currentArray) => {
				const updatedAccordionState: boolean[] = currentArray.map((val, index) => {
					return accordionID === index ? !val : false;
				});

				return updatedAccordionState;
			});
		};
	};

	useEffect(() => {
		const totalAccordions = () => {
			if (accordions.length === 0) {
				const accordionCount: number =
					accordionWrapperRef.current?.childElementCount === undefined
						? 0
						: accordionWrapperRef.current.childElementCount;

				const accordionInitialState = Array(accordionCount).fill(false);
				setAccordions(accordionInitialState);
			}
		};

		if (accordions.length > 0) return;
		totalAccordions();
	}, [accordions.length]);

	return (
		<section className='frequentlyAskedQuestions'>
			<h1 className='frequentlyAskedQuestions__headline'>FAQs</h1>

			<div className='frequentlyAskedQuestions__wrapper'>
				<h2 className='frequentlyAskedQuestions__accordionHeadline'>How it works</h2>
				<div className='frequentlyAskedQuestions__accordionWrapper'>
					<Accordion question='How do I download the app?'>
						To download the Scoot app, you can search “Scoot” in both the App and Google
						Play stores. An even simpler way to do it would be to click the relevant link
						at the bottom of this page and you’ll be re-directed to the correct page.
					</Accordion>

					<Accordion question='Can I find a nearby Scoots?'>
						To download the Scoot app, you can search “Scoot” in both the App and Google
						Play stores. An even simpler way to do it would be to click the relevant link
						at the bottom of this page and you’ll be re-directed to the correct page.
					</Accordion>

					<Accordion question='Do I need a license to ride?'>
						To download the Scoot app, you can search “Scoot” in both the App and Google
						Play stores. An even simpler way to do it would be to click the relevant link
						at the bottom of this page and you’ll be re-directed to the correct page.
					</Accordion>
				</div>
			</div>

			<div className='frequentlyAskedQuestions__wrapper'>
				<h2 className='frequentlyAskedQuestions__accordionHeadline'>Safe driving</h2>
				<div
					className='frequentlyAskedQuestions__accordionWrapper'
					ref={accordionWrapperRef}
				>
					<AccordionSet
						question='Should I wear a helmet?'
						onclick={handleToggle(0)}
						isOpen={accordions[0]}
					>
						Yes, please do! All cities have different laws. But we strongly strongly
						strongly recommend always wearing a helmet regardless of the local laws. We
						like you and we want you to be as safe as possible while Scooting.
					</AccordionSet>

					<AccordionSet
						question='How about the rules & regulations?'
						onclick={handleToggle(1)}
						isOpen={accordions[1]}
					>
						Yes, please do! All cities have different laws. But we strongly strongly
						strongly recommend always wearing a helmet regardless of the local laws. We
						like you and we want you to be as safe as possible while Scooting.
					</AccordionSet>

					<AccordionSet
						question='What if I damage my Scoot?'
						onclick={handleToggle(2)}
						isOpen={accordions[2]}
					>
						Yes, please do! All cities have different laws. But we strongly strongly
						strongly recommend always wearing a helmet regardless of the local laws. We
						like you and we want you to be as safe as possible while Scooting.
					</AccordionSet>
				</div>
			</div>
		</section>
	);
}

export default FrequentlyAskedQuestions;

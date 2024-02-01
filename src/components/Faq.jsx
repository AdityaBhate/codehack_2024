import React from "react";
import { FaPlus } from "react-icons/fa";

function Faq() {
	return (
		<div
			id='faq'
			className='flex flex-col bg-black m-10 sm:m-20 sm:p-20 p-8 border-dashed border-2 border-slate-800'>
			<div className='flex w-full gap-4 items-end justify-start mb-10'>
				<p className='sm:text-4xl text-lg text-[#F7A609] font-poppins font-extralight'>
					import
				</p>
				<p className='sm:text-5xl text-lg text-[#F7A609] font-poppins font-extrabold'>
					FAQs;
				</p>
			</div>
			<div className='flex flex-col items-center justify-center gap-4'>
				<FaqItem
					question='What is CODEHACK 2024?'
					answer='CODEHACK 2024 is an annual hackathon series by our Dev Code Community. This hackathon being a beginner friendly Hackathon any college going undergrad or student can register and hack their level best to gain experience and understand how hackathons go!'
				/>
				<FaqItem
					question='Who can register for this hackathon?'
					answer='Anyone and everyone can register for the event. There is no eligibility criteria or age restriction. Participants from any profession and institute are more than welcome to take part in this event.'
				/>
				<FaqItem
					question='What are the prizes for the winners?'
					answer='When you get awarded and appreciated for your work , your inner confidence boosts to the next level. DEV CODE Community is back to  provide you an opportunity to code, compete and learn at the same time. Gear up for Code Hack 2024 , to win prize pool up to x lakhs , stand a chance to get free certification from top industrial organizations and many more. Register Now!'
				/>
				<FaqItem
					question='What’s Dev Code & how to join it??'
					answer='Dev Code is your vibrant tech haven, welcoming tech enthusiasts of all levels and backgrounds. We transcend the concept of merely being a community; from curious first-timers to seasoned professionals, we embrace and empower every coders journey. Picture a space where aspiring hobbyists learn from industry veterans, where brilliant ideas spark from diverse perspectives, and where everyone is supported to code, connect, and thrive.Join Dev Code Community at ( https://dev-code-community.github.io/bio/ ) '
				/>
				<FaqItem
					question='Where to contact organizers?'
					answer=' Please write to us at devcode.community@gmail.com. We will be more than happy to address all your doubts and queries.'
				/>
			</div>
		</div>
	);
}

export default Faq;

const FaqItem = ({ question, answer }) => {
	const [showAnswer, setShowAnswer] = React.useState(false);

	return (
		<div className='bg-[#1f1f1f] w-full py-4 sm:px-6 px-4 flex flex-col gap-2'>
			<div
				className='flex justify-between items-center cursor-pointer'
				onClick={() => setShowAnswer(!showAnswer)}>
				<p className='text-slate-100 sm:text-lg text-sm'>{question}</p>
				<FaPlus color='white' />
			</div>
			<div
				className={`overflow-hidden transition-max-height ease-in-out duration-500 ${
					showAnswer ? "max-h-screen" : "max-h-0"
				}`}>
				<p className='text-xs sm:text-base text-slate-300'>{answer}</p>
			</div>
		</div>
	);
};

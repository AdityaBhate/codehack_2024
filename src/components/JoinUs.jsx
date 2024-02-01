import React, { useState } from "react";
import { RiCursorFill } from "react-icons/ri";

function JoinUs() {
	const [joinUsAs, setJoinUsAs] = useState("SPONSOR");
	return (
		<div
			id='join_us'
			className='flex flex-col sm:flex-row m-10 sm:m-20 border-dashed border-2 border-slate-800'>
			<div className='flex flex-col items-center gap-8 sm:p-20 p-8 bg-black'>
				<div className='flex flex-col gap-2'>
					<h2 className='text-4xl text-[#F7A609] font-extrabold font-poppins'>
						Join us;
					</h2>
					<p className='text-lg sm:text-base text-slate-500 font-light font-poppins'>
						not a hacker?, join us as
					</p>
				</div>
				<div className='flex flex-col justify-between gap-12'>
					<button
						className='border-white-1 bg-[#121212] p-8 text-[#ffffff93] rounded-lg shadow-slate-500 shadow-md hover:shadow hover:scale-95 transition-all'
						onClick={() => setJoinUsAs("SPONSOR")}>
						Sponsor
					</button>
					<button
						className='border-white-1 bg-[#121212] p-8 text-[#ffffff93] rounded-lg shadow-slate-500 shadow-md hover:shadow hover:scale-95 transition-all'
						onClick={() => setJoinUsAs("COMMUNITY_PARTNER")}>
						Community Partner
					</button>
				</div>
			</div>
			<div className='flex flex-col items-start justify-start gap-8 sm:p-20 p-8 bg-[#101010]'>
				{joinUsAs === "SPONSOR" ? (
					<>
						<p className='text-xl font-extrabold text-slate-200 font-poppins'>
							Sponsors;
						</p>
						<p className='text-sm font-light text-slate-400 font-poppins'>
							When you sponsor HackHive, you're not just placing your logo on a
							banner, you're associating your brand with dynamism, breakthrough
							ideas, and a knack for spotting and nurturing top talents. You'll
							get exposure to innovative solutions which can spark new insights
							for your business while also boosting your brand's credibility in
							the industry.
						</p>
						<button className='flex flex-row items-center justify-center gap-2 text-slate-800 bg-gray-300 px-4 py-2 font-poppins rounded-md hover:scale-105 transition-all'>
							<RiCursorFill /> Join us
						</button>
					</>
				) : (
					<>
						<p className='text-xl font-extrabold text-slate-200 font-poppins'>
							Community Partners;
						</p>
						<p className='text-sm font-light text-slate-400 font-poppins'>
							Community Partners are a group of active members who are
							passionate about people and have a sense of growth with a positive
							outlook of bringing change. These communities are thriving to
							build an inclusive and diverse culture where everyone is welcomed.
							Being a community partner of HackHive not only means that you will
							join hands to promote the hackathon but also that you are a strong
							believer in a collaboration that can support the larger masses 🚀.
						</p>
						<button className='flex flex-row items-center justify-center gap-2 text-slate-800 bg-gray-300 px-4 py-2 font-poppins rounded-md hover:scale-105 transition-all'>
							<RiCursorFill /> Join us
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default JoinUs;
{
	/* <p className='text-xl text-slate-200'></p>
				<p className='text-sm text-slate-400'>
					{" "}
				</p>
				<button className='text-slate-800 bg-gray-300 px-4 py-2'>
					Join us
				</button> */
}

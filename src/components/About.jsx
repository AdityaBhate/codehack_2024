import React from "react";

function About() {
	return (
		<div
			id='about'
			className='flex flex-col items-center justify-center sm:p-20 p-8 '>
			<div className='bg-[#101010] shadow-lg p-16 flex sm:flex-row flex-col gap-2 items-center justify-between border-dashed border-2 border-slate-700'>
				<div className='flex flex-col gap-2 items-start justify-center'>
					<p className='text-4xl text-[#ED5D3B] font-poppins font-light'>
						import
					</p>
					<p className='text-5xl text-[#ED5D3B] font-poppins font-bold'>
						about;
					</p>
				</div>
				<div className='flex-1 flex justify-center items-center sm:pl-28 p-4'>
					<p className='text-base sm:text-lg font-poppins text-[#9B9B9B]'>
						Code Hack is An annual global event hosted by Dev Code Community for
						tech enthusiasts worldwide. Join us to solve challenges, learn, and
						create together in a supportive environment!
					</p>
				</div>
			</div>
			{/* STATS */}
			<div className='bg-[#151515] w-full h-[500px] sm:h-[200px] shadow-lg p-4 flex flex-col sm:flex-row items-center justify-around '>
				<div className='flex flex-col justify-center items-center gap-2 p-2'>
					<p className='text-5xl font-extrabold text-[#CF961A] drop-shadow-xl'>
						1,100+
					</p>
					<p className='text-xs text-slate-500'>registrations</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-2 p-2'>
					<p className='text-5xl font-extrabold text-[#CF961A] drop-shadow-xl'>
						₹50,000+
					</p>
					<p className='text-xs text-slate-500'>in prizes</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-2 p-2'>
					<p className='text-5xl font-extrabold text-[#CF961A] drop-shadow-xl'>
						10+
					</p>
					<p className='text-xs text-slate-500'>sponsors</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-2 p-2'>
					<p className='text-5xl font-extrabold text-[#CF961A] drop-shadow-xl'>
						6+
					</p>
					<p className='text-xs text-slate-500'>countries</p>
				</div>
			</div>
		</div>
	);
}

export default About;

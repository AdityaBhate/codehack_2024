import React from "react";
import { IoMail } from "react-icons/io5";
import { FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<div
			id='contact_us'
			className='bg-black rounded-t-3xl mx-10 sm:mx-20 sm:p-20 p-8 border-dashed border-2 border-slate-800'>
			<div className='mb-4 flex items-end justify-start gap-1 sm:gap-4'>
				<p className='text-[#F7A609] text-lg sm:text-3xl font-poppins font-extralight'>
					$ sudo
				</p>
				<h2 className='text-[#F7A609] text-2xl sm:text-4xl font-poppins font-extrabold'>
					Contact
				</h2>
			</div>

			<div className='bg-[#1f1f1f] p-4 flex flex-col gap-8'>
				<div className='flex flex-row items-center gap-2'>
					<IoMail color='white' size={20} />
					<a className='text-slate-100 font-poppins text-xs sm:text-base cursor-pointer'>
						devcodecommunity@gmail.com
					</a>
				</div>
				<div className='flex flex-row gap-2'>
					<a className='cursor-pointer'>
						<FaLinkedin color='white' size={20} />
					</a>
					<a className='cursor-pointer'>
						<FaDiscord color='white' size={20} />
					</a>
					<a className='cursor-pointer'>
						<FaYoutube color='white' size={20} />
					</a>
				</div>
			</div>

			<div className='mt-6'>
				<p className='text-slate-300 text-center font-poppins text-xs sm:text-base'>
					© 2021 Dev Code Community. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;

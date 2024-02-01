import React from "react";
import CODEHACK from "../assets/CODEHACK.png";
import { FaDiscord } from "react-icons/fa";

function Hero() {
	return (
		<div id='home' className='flex flex-col items-center mb-8'>
			<div className='flex flex-row items-end justify-end '>
				<img src={CODEHACK} alt='CODEHACK' className='scale-50 sm:scale-75' />
			</div>
			<div className='flex justify-between items-center gap-4 sm:gap-8'>
				<button className='mb-4 text-white px-6 py-2 rounded-xl shadow-lg bg-gradient-to-r bg-[#F79F37] hover:scale-110 hover:-translate-y-4 transition-all duration-300 ease-in-out'>
					Register
				</button>
				<button className='flex gap-2 items-center mb-4 text-black px-6 py-2 rounded-xl shadow-lg bg-gradient-to-r bg-white hover:scale-110 hover:-translate-y-4 transition-all duration-300 ease-in-out'>
					<FaDiscord />
					Discord
				</button>
			</div>
		</div>
	);
}

export default Hero;

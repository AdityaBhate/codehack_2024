import React from "react";
import HomeIcon from "./HomeIcon";
import ScheduleIcon from "./ScheduleIcon";
import ProblemIcon from "./ProblemIcon";
import StatsIcon from "./StatsIcon";
import AboutIcon from "./AboutIcon";

function Navbar() {
	return (
		<div class='fixed left-0 top-0 h-screen w-16 flex flex-col justify-center items-center ml-2'>
			<div class='group w-16 h-16 bg-[#9456B8] mb-4 flex justify-center items-center p-2 transition-transform duration-300 ease-in-out hover:translate-x-4 hover:scale-105 hover:w-20 hover:h-20 cursor-pointer rounded-lg'>
				<div class='invisible group-hover:visible absolute bottom-0 w-full text-center text-xs text-gray-100 p-1 transition-all duration-300 transform hover:text-white hover:scale-110'>
					Home
				</div>
				<HomeIcon />
			</div>

			<div class='group w-16 h-16 bg-[#9456B8] mb-4 flex justify-center items-center p-2 transition-transform duration-300 ease-in-out hover:translate-x-2 hover:scale-105 hover:w-20 hover:h-20 cursor-pointer rounded-lg'>
				<div class='invisible group-hover:visible absolute bottom-0 w-full text-center text-xs text-gray-100 p-1 transition-all duration-300 transform hover:text-white hover:scale-110'>
					Schedule
				</div>
				<ScheduleIcon />
			</div>

			<div class='group w-16 h-16 bg-[#9456B8] mb-4 flex flex-col justify-center items-center hover:justify-between p-2 transition-transform duration-300 ease-in-out hover:translate-x-2 hover:scale-105 hover:w-20 hover:h-20 cursor-pointer rounded-lg'>
				<div class='invisible group-hover:visible absolute bottom-0 w-full text-center text-xs text-gray-100 p-1 transition-all duration-300 transform hover:text-white hover:scale-110'>
					Problem Statements
				</div>
				<ProblemIcon />
			</div>

			<div class='group w-16 h-16 bg-[#9456B8] mb-4 flex justify-center items-center p-2 transition-transform duration-300 ease-in-out hover:translate-x-4 hover:scale-105 hover:w-20 hover:h-20 cursor-pointer rounded-lg'>
				<div class='invisible group-hover:visible absolute bottom-0 w-full text-center text-xs text-gray-100 p-1 transition-all duration-300 transform hover:text-white hover:scale-110'>
					About Us
				</div>
				<AboutIcon />
			</div>

			<div class='group w-16 h-16 bg-[#9456B8] mb-4 flex flex-col justify-center items-center hover:justify-around p-2 transition-transform duration-300 ease-in-out hover:translate-x-2 hover:scale-105 hover:w-20 hover:h-20 cursor-pointer rounded-lg'>
				<div class='invisible group-hover:visible absolute bottom-0 w-full text-center text-xs text-gray-100 p-1 transition-opacity duration-300 transform hover:text-white hover:scale-110'>
					CodeHack'23'
				</div>
				<StatsIcon />
			</div>
		</div>
	);
}
// function Navbar() {
// 	return (
// 		<div className='fixed left-0 top-0 h-screen w-16 flex flex-col justify-center items-center ml-2'>
// 			<div className='w-16 h-16 bg-[#9456B8] mb-4 flex justify-center items-center p-2'>
// 				<HomeIcon />
// 			</div>
// 			<div className='w-16 h-16 bg-[#9456B8] mb-4 flex justify-center items-center p-2'>
// 				<ScheduleIcon />
// 			</div>
// 			<div className='w-16 h-16 bg-[#9456B8] mb-4 flex justify-center items-center p-2'>
// 				<ProblemIcon />
// 			</div>
// 			<div className='w-16 h-16 bg-[#9456B8] mb-4 flex justify-center items-center p-2'>
// 				<StatsIcon />
// 			</div>
// 		</div>
// 	);
// }

export default Navbar;

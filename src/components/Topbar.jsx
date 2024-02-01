import React from "react";

function Topbar() {
	return (
		<>
			<div className='fixed top-0 left-0 w-full bg-yellow-500 text-black p-1 z-20'>
				<div className='animate-banner'>
					<p className='inline-block sm:px-4 px-2 font-poppins text-xs sm:text-base font-light '>
						Coming Soon
					</p>
					<p className='inline-block sm:px-4 px-2 font-poppins text-xs sm:text-base font-light '>
						Coming Soon
					</p>
					<p className='inline-block sm:px-4 px-2 font-poppins text-xs sm:text-base font-light '>
						Coming Soon
					</p>
					<p className='inline-block sm:px-4 px-2 font-poppins text-xs sm:text-base font-light '>
						Coming Soon
					</p>
				</div>
			</div>
		</>
	);
}

export default Topbar;

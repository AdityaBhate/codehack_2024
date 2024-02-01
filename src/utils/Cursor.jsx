// StarCursor.js
import React from "react";

const Cursor = ({ children }) => {
	const cursorStyle = {
		cursor:
			"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFDA6D'><circle cx='12' cy='12' r='10' /></svg>\") 12 12, auto",
	};
	return (
		<div
			className='flex items-center justify-center h-screen'
			style={cursorStyle}>
			{children}
		</div>
	);
};

export default Cursor;

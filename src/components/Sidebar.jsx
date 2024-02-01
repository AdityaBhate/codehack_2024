const SideBar = () => {
	return (
		<div className='fixed h-screen top-0 left-0 flex items-center w-16 z-10 '>
			<div className='px-2 py-6 flex flex-col gap-4 justify-center shadow-yellow-700 shadow-lg bg-[#161121] rounded-r-[50px]'>
				<Navlink text={"home"} />
				<Divider />
				<Navlink text={"about"} />
				<Divider />
				<Navlink text={"join_us"} />
				<Divider />
				<Navlink text={"faq"} />
				<Divider />
				<Navlink text={"contact_us"} />
			</div>
		</div>
	);
};

const Navlink = ({ text }) => {
	const handleClick = () => {
		const targetElement = document.getElementById(text);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className=''>
			<span
				className='[writing-mode:vertical-rl] text-[#FFDA6D] hover:text-slate-500 cursor-pointer'
				onClick={handleClick}>
				{text}
			</span>
		</div>
	);
};

const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;

import React from "react";
import SideBar from "./components/Sidebar";
import Cursor from "./utils/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Faq from "./components/Faq";
import JoinUs from "./components/JoinUs.jsx";
import Topbar from "./components/Topbar.jsx";
import Footer from "./components/Footer.jsx";
import Sponsors from "./components/Sponsors.jsx";

function App() {
	return (
		<>
			<>
				<Topbar />
				<SideBar />
				<Hero />
				<About />
				<Sponsors />
				<JoinUs />
				<Faq />
				<Footer />
			</>
		</>
	);
}

export default App;

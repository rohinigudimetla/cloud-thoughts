import { useEffect, useState } from "react";
import { motion } from "motion/react";

function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Define constant speed in pixels per second
	const SPEED = 30; // Adjust this value to make it faster or slower

	// Calculate duration based on distance
	const distance = windowWidth + 125; // From -125 to windowWidth
	const duration = distance / SPEED;

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-rosybrown via-melon to-rosequartz flex flex-col items-center justify-center px-4 overflow-hidden">
			{/*  Floating clouds */}
			<motion.img
				key={windowWidth} // This forces the animation to restart when window resizes
				src="/cloudThoughts/topCloud1.svg"
				className="absolute top-[40px] w-[124.29px] h-[49px]"
				style={{ left: -125 }}
				animate={{
					left: windowWidth,
				}}
				transition={{
					duration: duration,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				}}
			/>
			<motion.img
				src="/cloudThoughts/topcloud2.svg"
				className="absolute top-[60px] left-[80px] w-[150.25px] h-[52.24px]"
				animate={{ x: [0, 15, 0] }}
				transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.img
				src="/cloudThoughts/topcloud3.svg"
				className="absolute top-[55px] left-[150px] w-[86.5px] h-[25px]"
				animate={{ x: [0, 12, 0] }}
				transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.img
				src="/cloudThoughts/topcloud4.svg"
				className="absolute top-[70px] left-[210px] w-[85.9px] h-[30.86px]"
				animate={{ x: [0, 10, 0] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.img
				src="/cloudThoughts/topcloud5.svg"
				className="absolute top-[50px] left-[280px] w-[79.07px] h-[22.5px]"
				animate={{ x: [0, 18, 0] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>

			{/*  Title */}
			<h1 className="text-4xl font-bold text-gray-700 mb-8 font-[Comfortaa] z-10">
				CloudThoughts
			</h1>
		</div>
	);
}

export default App;

import { useEffect, useState } from "react";
import { motion } from "motion/react";

function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Define constant speed in pixels per second
	const SPEED = 30;

	// Calculate duration based on distance
	const distance = windowWidth + 125;
	const duration = distance / SPEED;

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="relative min-h-screen bg-gradient-to-b from-rosybrown via-melon to-rosequartz flex flex-col items-center justify-center px-4 overflow-hidden">
			{/*  Floating clouds */}

			{/* Cloud 1: Left to Right, starts at left edge */}
			<motion.img
				key={`${windowWidth}-1`}
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

			{/* Cloud 2: Right to Left, starts at right edge */}
			<motion.img
				key={`${windowWidth}-2`}
				src="/cloudThoughts/topcloud2.svg"
				className="absolute top-[120px] w-[150.25px] h-[52.24px]"
				style={{ left: windowWidth }}
				animate={{
					left: -150,
				}}
				transition={{
					duration: duration,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				}}
			/>

			{/* Cloud 3: Left to Right, starts at 20% position */}
			<motion.img
				key={`${windowWidth}-3`}
				src="/cloudThoughts/topcloud3.svg"
				className="absolute top-[200px] w-[86.5px] h-[25px]"
				style={{ left: windowWidth * 0.2 }}
				animate={{
					left: [windowWidth * 0.2, windowWidth, -87, windowWidth * 0.2],
				}}
				transition={{
					duration: duration * 2,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.4, 0.9, 1],
				}}
			/>

			{/* Cloud 4: Right to Left, starts at 70% position */}
			<motion.img
				key={`${windowWidth}-4`}
				src="/cloudThoughts/topcloud4.svg"
				className="absolute top-[70px] w-[85.9px] h-[30.86px]"
				style={{ left: windowWidth * 0.7 }}
				animate={{
					left: [windowWidth * 0.7, -86, windowWidth, windowWidth * 0.7],
				}}
				transition={{
					duration: duration * 2,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.35, 0.85, 1],
				}}
			/>

			{/* Cloud 5: Left to Right, starts at 40% position */}
			<motion.img
				key={`${windowWidth}-5`}
				src="/cloudThoughts/topcloud5.svg"
				className="absolute top-[50px] w-[79.07px] h-[22.5px]"
				style={{ left: windowWidth * 0.4 }}
				animate={{
					left: [windowWidth * 0.4, windowWidth, -80, windowWidth * 0.4],
				}}
				transition={{
					duration: duration * 1.8,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.3, 0.8, 1],
				}}
			/>
			{/* Mid Clouds Section - i need to resize them based on wireframe!! */}

			{/* Mid Cloud 1: Right to Left, starts at 80% position */}
			<motion.img
				key={`${windowWidth}-mid1`}
				src="/cloudThoughts/midcloud1.svg"
				className="absolute top-[300px] w-[100px] h-[40px]"
				style={{ left: windowWidth * 0.8 }}
				animate={{
					left: [windowWidth * 0.8, -100, windowWidth, windowWidth * 0.8],
				}}
				transition={{
					duration: duration * 2.2,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.4, 0.85, 1],
				}}
			/>

			{/* Mid Cloud 2: Left to Right, starts at left edge */}
			<motion.img
				key={`${windowWidth}-mid2`}
				src="/cloudThoughts/midcloud2.svg"
				className="absolute top-[350px] w-[90px] h-[35px]"
				style={{ left: -90 }}
				animate={{
					left: windowWidth,
				}}
				transition={{
					duration: duration * 1.5,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				}}
			/>

			{/* Mid Cloud 3: Right to Left, starts at right edge */}
			<motion.img
				key={`${windowWidth}-mid3`}
				src="/cloudThoughts/midcloud3.svg"
				className="absolute top-[400px] w-[110px] h-[45px]"
				style={{ left: windowWidth }}
				animate={{
					left: -110,
				}}
				transition={{
					duration: duration * 1.8,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				}}
			/>

			{/* Mid Cloud 4: Left to Right, starts at 30% position */}
			<motion.img
				key={`${windowWidth}-mid4`}
				src="/cloudThoughts/midcloud4.svg"
				className="absolute top-[320px] w-[95px] h-[38px]"
				style={{ left: windowWidth * 0.3 }}
				animate={{
					left: [windowWidth * 0.3, windowWidth, -95, windowWidth * 0.3],
				}}
				transition={{
					duration: duration * 2,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.35, 0.85, 1],
				}}
			/>

			{/* Mid Cloud 5: Right to Left, starts at 60% position */}
			<motion.img
				key={`${windowWidth}-mid5`}
				src="/cloudThoughts/midcloud5.svg"
				className="absolute top-[450px] w-[105px] h-[42px]"
				style={{ left: windowWidth * 0.6 }}
				animate={{
					left: [windowWidth * 0.6, -105, windowWidth, windowWidth * 0.6],
				}}
				transition={{
					duration: duration * 1.7,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.45, 0.9, 1],
				}}
			/>

			{/* Mid Cloud 6: Left to Right, starts at 10% position */}
			<motion.img
				key={`${windowWidth}-mid6`}
				src="/cloudThoughts/midcloud6.svg"
				className="absolute top-[380px] w-[88px] h-[36px]"
				style={{ left: windowWidth * 0.1 }}
				animate={{
					left: [windowWidth * 0.1, windowWidth, -88, windowWidth * 0.1],
				}}
				transition={{
					duration: duration * 2.3,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.4, 0.88, 1],
				}}
			/>

			{/* Mid Cloud 7: Right to Left, starts at 90% position */}
			<motion.img
				key={`${windowWidth}-mid7`}
				src="/cloudThoughts/midcloud7.svg"
				className="absolute top-[500px] w-[115px] h-[46px]"
				style={{ left: windowWidth * 0.9 }}
				animate={{
					left: [windowWidth * 0.9, -115, windowWidth, windowWidth * 0.9],
				}}
				transition={{
					duration: duration * 1.9,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.42, 0.87, 1],
				}}
			/>

			{/* Mid Cloud 8: Left to Right, starts at 50% position */}
			<motion.img
				key={`${windowWidth}-mid8`}
				src="/cloudThoughts/midcloud8.svg"
				className="absolute top-[430px] w-[98px] h-[40px]"
				style={{ left: windowWidth * 0.5 }}
				animate={{
					left: [windowWidth * 0.5, windowWidth, -98, windowWidth * 0.5],
				}}
				transition={{
					duration: duration * 2.1,
					repeat: Infinity,
					ease: "linear",
					times: [0, 0.25, 0.75, 1],
				}}
			/>
			{/* Cloud Cluster at Bottom - Static- need to adjust mid cloud vertical positioning to accommodate cloud cluster!! */}
			<img
				src="/cloudThoughts/cloudCluster.svg"
				className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[720.29px] h-[466.5px] z-0"
				alt="Cloud cluster"
			/>

			{/*  Title */}
			<h1 className="text-4xl font-bold text-wenge mb-8 font-[Comfortaa] z-10">
				CloudThoughts
			</h1>
			{/* Text input */}
			<div className="relative w-full max-w-md z-10">
				<input
					type="text"
					placeholder="Type your thought..."
					className="w-full px-6 py-4 pr-24 bg-almond border-[3px] border-wenge rounded-[25px] 
                   text-wenge placeholder-wenge font-[Comfortaa] text-lg font-medium
                   focus:outline-none  transition-colors"
				/>
				{/* Post button */}
				<button
					className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 
                       bg-desertsand border-[3px] border-wenge rounded-[20px] 
                       text-wenge font-[Comfortaa] font-bold  
                       "
				>
					Post
				</button>
			</div>
			{/* colors: {
				rosybrown: "#D99EA3",
				rosequartz: "#AC90A6",
				almond: "#F2E0CC",
				wenge: "#6C5458",
				desertsand: "#E5C1A7",
				melon: "#ebb6a9",
			} 
			 i might need this later:
			 shadow-none hover:shadow-[0_0_30px_theme(colors.almond/90%)]
               transition-all duration-500 ease-in-out*/}
		</div>
	);
}

export default App;

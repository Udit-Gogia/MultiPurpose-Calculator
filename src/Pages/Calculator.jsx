import React from "react";
import "../Styles/CalculatorCSS.css";

function Calculator() {

const 

	return (
		<div className="bg-[#1f1d21] w-screen h-screen p-4">
			<div className="grid pt-8 text-transparent text-white text-5xl grid-props gap-4 justify-center">
				<div
					id="output "
					className="col-span-full  bg-[#DEDAE1] flex text-black flex-col justify-around p-3break-words p-4"
				>
					<div id="prev" className="text-2xl"></div>
					<div id="curr" className="text-5xl"></div>
				</div>

				<button className="border-2 rounded-lg text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21] col-span-2 text-6xl">
					AC
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					C
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					÷
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					7
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21] ">
					8
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					9
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					*
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					4
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					5
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					6
				</button>
				<button className="border-2 rounded-lg  text-6xl text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					+
				</button>
				<button className="border-2 rounded-lg  text-6xl  text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					1
				</button>
				<button className="border-2 rounded-lg  text-6xl  text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					2
				</button>
				<button className="border-2 rounded-lg  text-6xl  text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					3
				</button>
				<button className="border-2 rounded-lg  text-6xl  text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					-
				</button>
				<button className="border-2 rounded-lg  text-6xl  text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					.
				</button>
				<button className="border-2 rounded-lg  text-6xl  text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					0
				</button>
				<button className="border-2 rounded-lg  text-6xl col-span-2 text-white hover:bg-[#DEDAE1] hover:text-[#1f1d21]">
					=
				</button>
			</div>
		</div>
	);
}
export default Calculator;

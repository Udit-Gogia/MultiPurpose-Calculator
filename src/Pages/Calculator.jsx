import React from "react";

function Calculator() {
	return (
		<div className="bg-[#1F1D21] w-screen h-screen text-[#DEDAE1] flex">
			<div className="flex flex-col bg-[#DEDAE1] h-screen p-5 S font-bold text-[#476C9B] text-2xl w-[11vw]">
				<p className="p-4">Sidebar</p>
				<p className="p-4">Sidebar</p>
				<p className="p-4">Sidebar</p>
				<p className="p-4">Sidebar</p>
			</div>

			<div className="flex flex-col ">
				<div className="bg-[#3d3b40] p-6 text-9xl  w-[89vw] flex justify-end">
					980
				</div>
				<div className="flex">
					<div className="flex flex-col">
						<div className="flex p-4 ">
							<p className="p-8 w-34 text-3xl">7</p>
							<p className="p-8 w-34 text-3xl">8</p>
							<p className="p-8 w-34 text-3xl">9</p>
						</div>
						<div className="flex p-4">
							<p className="p-8 w-34 text-3xl">4</p>
							<p className="p-8 w-34 text-3xl">5</p>
							<p className="p-8 w-34 text-3xl">6</p>
						</div>
						<div className="flex p-4">
							<p className="p-8 w-34 text-3xl">1</p>
							<p className="p-8 w-34 text-3xl">2</p>
							<p className="p-8 w-34 text-3xl">3</p>
						</div>
						<div className="flex p-4">
							<p className="p-8 w-34 text-3xl">0</p>
							<p className="p-8 w-34 text-3xl">.</p>
							<p className="p-8 w-34 text-3xl">DEL</p>
						</div>
					</div>
					<div className="flex">
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}
export default Calculator;

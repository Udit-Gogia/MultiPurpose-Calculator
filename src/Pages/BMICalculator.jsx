import React, { useState } from "react";
import BMI from "../Components/Bmi";
import "../Styles/BmiCSS.css";

export default function BMICalculator() {
	const [weightkg, setWeightkg] = useState();
	const [weightlbs, setWeightlbs] = useState();
	const [height, setHeight] = useState();
	const [bmi, setBmi] = useState(null);

	function changeweightkg(e) {
		setWeightkg(e.target.value);
		setWeightlbs(eval(e.target.value * 2.20462).toFixed(2));
		setBmi(eval(weightkg / (height * height)).toFixed(5));
	}
	function changeweightlbs(e) {
		setWeightlbs(e.target.value);
		setWeightkg(eval(e.target.value / 2.20462).toFixed(2));
		setBmi(eval(e.target.value / 2.20462 / (height * height)).toFixed(5));
	}
	function changeheight(e) {
		setHeight(e.target.value);
		setBmi(eval(weightkg / (e.target.value * e.target.value)).toFixed(5));
	}

	return (
		<div className="">
			<div className="bg-[#1f1d21] w-screen h-screen p-4 flex items-center justify-center flex-col">
				<div className="text-[#E85F5C] text-5xl text-center mb-8">
					BMI <span className="text-white">CALCULATOR</span>
				</div>
				<div className="flex p-4 items-center flex-col">
					<div className="flex responsive">
						<div className="flex flex-col items-center">
							<BMI
								placeholder="Enter weight in Kg"
								valueofinp={weightkg}
								onchange={changeweightkg}
							/>
							<div className="text-white text-lg flex items-center ">(kg)</div>
						</div>
						<div className="text-[#E85F5C] text-xl px-4 flex pt-8 font-bold ">
							OR
						</div>
						<div className="flex flex-col items-center">
							<BMI
								placeholder="Enter weight in Pounds"
								valueofinp={weightlbs}
								onchange={changeweightlbs}
							/>
							<div className="text-white text-lg flex items-center ">(lbs)</div>
						</div>
					</div>
					<div className="text-[#DEDAE1] text-5xl ">=</div>
					<div className="flex flex-col items-center">
						<div className="flex responsive ">
							<div className="flex flex-col items-center">
								<BMI
									placeholder="Enter height in m"
									valueofinp={height}
									onchange={changeheight}
								/>
								<div className="text-white text-lg  flex items-center ">
									(m)
								</div>
							</div>
						</div>
					</div>
				</div>

				<p className="text-white text-2xl">Your BMI is -&gt; {bmi}</p>
			</div>
		</div>
	);
}

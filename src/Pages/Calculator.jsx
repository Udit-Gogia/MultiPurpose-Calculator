import React, { useState } from "react";
import "../Styles/CalculatorCSS.css";

function Calculator() {
	const [number, setNumber] = useState("");
	const [value, setValue] = useState("0");
	function Solve(e) {
		setNumber(number.concat(e.target.name));
		setValue(number.concat(e.target.name));
	}
	function Clear() {
		setNumber("");
		setValue("");
	}
	function Delete() {
		setNumber(number.slice(0, number.length - 1));
		setValue(number.slice(0, number.length - 1));
	}
	function Calculations() {
		setNumber(eval(number).toString());
		setValue(eval(number).toString());
	}
	function factorial() {
		var i, f;

		f = 1;

		for (i = 1; i <= number; i++) {
			f *= i;
		}
		i = i - 1;

		setNumber(f.toString());
	}
	function Sin() {
		setNumber(Math.sin(number).toString());
		setValue(`sin(${number})`);
	}
	function Cos() {
		setNumber(Math.cos(number).toString());
		setValue(`cos(${number})`);
	}
	function Tan() {
		setNumber(Math.tan(number).toString());
		setValue(`tan(${number})`);
	}
	function SquareRoot() {
		setNumber(Math.sqrt(number).toString());
		setValue(`√(${number})`);
	}
	function Square() {
		setNumber(Math.pow(number, 2).toString());
		setValue(`(${number})^2`);
	}
	function Pi() {
		setNumber(Math.PI.toString());
	}
	function Log() {
		setNumber(Math.log10(number).toString());
	}
	function Ln() {
		setNumber(Math.log(number).toString());
	}
	return (
		<div className="bg-[#1f1d21] w-screen h-screen p-4 main-div">
			<div className="grid pt-8 text-transparent text-white text-5xl grid-props gap-4 justify-center place-content-center">
				<div
					id="output "
					className="col-span-full  bg-[#DEDAE1] flex text-black flex-col justify-around break-words h-28 items-end"
				>
					<div id="prev" className="text-2xl p-2">
						{value}
					</div>
					<div id="curr" className="text-5xl p-2">
						{number}
					</div>
				</div>

				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA] "
					onClick={Sin}
				>
					Sin( )
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={Cos}
				>
					Cos( )
				</button>
				<button
					className=" rounded-lg text-white hover:bg-[#DEDAE1] hover:text-[#E85F5C] col-span-2 text-4xl bg-[#E85F5C]"
					onClick={Clear}
				>
					AC
				</button>
				<button
					className="bg-[#E85F5C] rounded-lg  text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#E85F5C]"
					onClick={Delete}
				>
					C
				</button>
				<button
					className=" rounded-lg  text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#007CF0] bg-[#007CF0]"
					onClick={Solve}
					name="/"
				>
					÷
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={Tan}
				>
					Tan( )
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={Solve}
					name="2.718281828459045"
				>
					e
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="7"
				>
					7
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21] "
					onClick={Solve}
					name="8"
				>
					8
				</button>
				<button
					className="bg-sky-300 2 rounded-lg  text-4xl text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="9"
				>
					9
				</button>
				<button
					className="bg-[#007CF0] rounded-lg  text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#007CF0]  "
					onClick={Solve}
					name="*"
				>
					*
				</button>

				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={Log}
				>
					log<sub>10</sub>( )
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={Square}
				>
					<sup>^2</sup>
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="4"
				>
					4
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="5"
				>
					5
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="6"
				>
					6
				</button>
				<button
					className="bg-[#007CF0] rounded-lg  text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#007CF0] "
					onClick={Solve}
					name="+"
				>
					+
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={SquareRoot}
				>
					√
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={Pi}
				>
					π
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl  text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="1"
				>
					1
				</button>
				<button
					className=" rounded-lg  text-4xl  text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21] bg-sky-300"
					onClick={Solve}
					name="2"
				>
					2
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl  text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="3"
				>
					3
				</button>

				<button
					className=" rounded-lg  text-4xl  text-white hover:bg-[#DEDAE1] hover:text-[#007CF0] bg-[#007CF0]"
					onClick={Solve}
					name="-"
				>
					-
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={factorial}
				>
					x!
				</button>
				<button
					className=" rounded-lg text-4xl text-white hover:bg-[#DEDAE1] hover:text-[#7928CA] bg-[#7928CA]"
					onClick={Ln}
				>
					ln( )
				</button>
				<button
					className="bg-sky-300 rounded-lg  text-4xl  text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21] "
					onClick={Solve}
					name="."
				>
					.
				</button>

				<button
					className="bg-sky-300 rounded-lg  text-4xl  text-[#1f1d21] hover:bg-[#DEDAE1] hover:text-[#1f1d21]"
					onClick={Solve}
					name="0"
				>
					0
				</button>
				<button
					className="bg-[#E85F5C] rounded-lg  text-4xl col-span-2 text-white hover:bg-[#DEDAE1] hover:text-[#E85F5C] "
					onClick={Calculations}
					value="="
				>
					=
				</button>
			</div>
		</div>
	);
}
export default Calculator;

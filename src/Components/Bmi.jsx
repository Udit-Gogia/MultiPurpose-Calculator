import React from "react";

export default function (props) {
	const { onchange, valueofinp } = props;
	return (
		<div>
			<div className="p-4  inputs" id="input-div">
				<input
					type="number"
					className="border-4 rounded-lg border-[#E85F5C] p-4 focus:outline-none"
					placeholder={props.placeholder}
					value={valueofinp || ""}
					onChange={onchange}
				></input>
			</div>
		</div>
	);
}

import React from "react";
import "../Styles/CurrencyCSS.css";

function CEComp(props) {
	const {
		currencyOptions,
		selectedCurrency,
		onChangingCurr,
		amount,
		onChangeAmount,
	} = props;
	return (
		<div className="p-4  inputs" id="input-div">
			<input
				type="number"
				className="border-4 rounded-lg border-[#E85F5C] p-4 focus:outline-none"
				value={amount}
				onChange={onChangeAmount}
			></input>
			<select
				className="p-4 m-4 border-4 rounded-lg border-[#007CF0]"
				value={selectedCurrency}
				onChange={onChangingCurr}
			>
				{currencyOptions?.map((option) => (
					<option value={option}>{option}</option>
				))}
			</select>
		</div>
	);
}

export default CEComp;

import React, { useEffect, useState } from "react";
import "../Styles/CurrencyCSS.css";
import CEComp from "../Components/CurrencyComp";

const url =
	"http://api.exchangeratesapi.io/v1/latest?access_key=de42034d34bd2c297623111a6d3fb3c9&format=1";

function CE() {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [fromCurr, setFromCurr] = useState();
	const [toCurr, setToCurr] = useState();
	const [exchangerate, setExchangerate] = useState();
	const [amount, setAmount] = useState(1);
	const [amountfrom, setAmountfrom] = useState(true);

	let toamount, fromamount;

	if (amountfrom) {
		fromamount = amount;
		toamount = amount * exchangerate || 0;
	} else {
		toamount = amount;
		fromamount = amount / exchangerate;
	}

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
				setFromCurr(data.base);

				setToCurr(Object.keys(data.rates)[0]);
				setExchangerate(data.rates[Object.keys(data.rates)[0]]);
			});
	}, []);

	useEffect(() => {
		if (fromCurr !== undefined && toCurr !== undefined) {
			fetch(`${url}?base=${fromCurr}&symbols=${toCurr}`)
				.then((res) => res.json())
				.then((data) => setExchangerate(data.rates[toCurr]));
		}
	}, [fromCurr, toCurr]);

	function handleAmountChangeFrom(e) {
		setAmount(e.target.value);
		setAmountfrom(true);
	}
	function handleAmountChangeTo(e) {
		setAmount(e.target.value);
		setAmountfrom(false);
	}

	return (
		<div className="bg-[#1f1d21] w-screen h-screen p-4 flex items-center justify-center flex-col">
			<div className="text-[#DEDAE1] text-5xl text-center">
				Currency Convertor
			</div>
			<div className="flex p-4 items-center flex-col">
				<CEComp
					currencyOptions={currencyOptions}
					selectedCurrency={fromCurr}
					onChangingCurr={(e) => setFromCurr(e.target.value)}
					onChangeAmount={handleAmountChangeFrom}
					amount={fromamount}
				/>
				<div className="text-[#DEDAE1] text-5xl ">=</div>
				<CEComp
					currencyOptions={currencyOptions}
					selectedCurrency={toCurr}
					onChangingCurr={(e) => setToCurr(e.target.value)}
					onChangeAmount={handleAmountChangeTo}
					amount={toamount}
				/>
			</div>
		</div>
	);
}

export default CE;

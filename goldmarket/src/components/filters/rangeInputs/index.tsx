import React, {useState} from 'react';
const RangeInput = ({getRanges, title}: any) => {
	const [showFilters, setShowFilters] = useState(false);
	const [range, setRange] =useState({
		min: '',
		max: ''
	});
	const handleClick = () => {
		getRanges(range.min, range.max, `${title}` + 'Ranges');
		setShowFilters(!showFilters);
	};
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
		const value = e.target.value;
		console.log(e.target.value);
		setRange({
			...range,
			[name]: value,
		});
	};

	return (
		<div>
			<div onClick={() => setShowFilters(!showFilters)}>{title.toUpperCase()}</div>
			{
				showFilters && <div>
					<input
						type="number"
						onChange={(e) => handleInput(e, 'min')}
						value={range.min}
					/>
					<input
						type="number"
						onChange={(e) => handleInput(e, 'max')}
						value={range.max}
					/>
					<button onClick={handleClick}>submit</button>
				</div>
			}
		</div>
	);
};

export default RangeInput;

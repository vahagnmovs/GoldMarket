import { TDataProps } from 'src/components/centers/types';


const setNewLengthData = (data: TDataProps[], length = 6) => {
	const newLengthArray = [...data];
	if (newLengthArray.length > 6) {
		newLengthArray.length = length;
	}
	return newLengthArray;
};

export default setNewLengthData;
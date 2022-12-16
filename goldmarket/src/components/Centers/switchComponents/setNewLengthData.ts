import { TDataProps } from "src/components/Centers/types";

export const setNewLengthData = (data: TDataProps[], length = 6) => {
    const newLengthArray = [];
    for (let i = 0; i < length; i++) {
        newLengthArray.push(data[i]);
    }
    return newLengthArray;
};

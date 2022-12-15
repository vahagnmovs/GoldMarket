import { IDataProp } from "src/components/Centers/types";

export const setNewLengthData = (data: IDataProp[], length = 6) => {
    const newLengthArray = [];
    for (let i = 0; i < length; i++) {
        newLengthArray.push(data[i]);
    }
    return newLengthArray;
};

import { IdataProp } from "src/components/Centers/types";

export const setNewLengthData = (data: IdataProp[], length = 6) => {
    const newLengthArray = [];
    for (let i = 0; i < length; i++) {
        newLengthArray.push(data[i]);
    }
    return newLengthArray;
};

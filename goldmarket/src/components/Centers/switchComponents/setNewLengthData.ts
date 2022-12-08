import { Type } from "../types";

export const setNewLengthData = (data: Type[], length = 6) => {
    const newLengthArray = [];
    for (let i = 0; i < length; i++) {
        newLengthArray.push(data[i]);
    }
    return newLengthArray;
};

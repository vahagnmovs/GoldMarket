type TNewLengthTablePrice = {
    gold: string;
    buy: string;
    sell: string;
    incOrder: string;
    time: string;
}
const newLengthTablePrice = (data: TNewLengthTablePrice[], length = 4) => {
    const newLengthArray = [...data];
    if (newLengthArray.length > 4) {
        newLengthArray.length = length;
    }
    return newLengthArray;
};

export default newLengthTablePrice;
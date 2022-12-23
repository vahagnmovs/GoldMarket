import React from 'react';

type TGoldPrice = {
    gold: string;
    buy: string;
    sell: string;
    incOrder: string;
    time: string;
    index: number;
}

const GoldPrice = ({index, gold, buy, sell, incOrder, time }: TGoldPrice) => {

    return (
        <tbody>
            <tr className={index % 2 !== 0 ? "white" : "gray"}>
                <td>{gold}</td>
                <td>{buy}</td>
                <td>{sell}</td>
                <td className={'green'}>{incOrder}</td>
                <td>{time}</td>
            </tr>
        </tbody>


    );
};

export default GoldPrice;
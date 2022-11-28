import React from 'react';
import "../../priceList/goldPriceList/Style/GoldPriceList.scss"

function GoldPriceList({isShowMoreBtn}) {


    return (
        <div className={"table"}>
            {
                isShowMoreBtn
                    ?
                    <table>
                        <thead>
                        <tr className={"top_tr"}>
                            <th>GOLD</th>
                            <th>BUY</th>
                            <th>SELL</th>
                            <th>+ OR -</th>
                            <th>TIME</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th className={"tr2"}>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>

                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>

                        </tr>
                        <tr className={"tr2"}>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>

                        </tr>
                        </tbody>


                    </table>
                    :
                    <table>
                        <thead>
                        <tr>
                            <th>GOLD</th>
                            <th>BUY</th>
                            <th>SELL</th>
                            <th>+ OR -</th>
                            <th>TIME</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>


                        </tr>
                        <tr className={"tr2"}>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>


                        </tr>
                        <tr>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>
                        </tr>
                        <tr className={"tr2"}>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>

                        </tr>
                        </tbody>
                        <tbody>
                        <tr className={"tr2"}>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>

                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>999 - 24k</th>
                            <th>56.3</th>
                            <th>56.9</th>
                            <th>-0.20</th>
                            <th>15:29:23</th>

                        </tr>
                        </tbody>
                        <tbody>

                        </tbody>
                    </table>
            }
        </div>
    );
};

export default GoldPriceList;
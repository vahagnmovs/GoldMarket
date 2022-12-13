import React from 'react';

function GoldPriceList({isShowMoreBtn}) {
    return (
        <div>
            {
                isShowMoreBtn
                    ?
                    <table className={"table-price"}>
                        <colgroup>
                            {/* <col style={width: 300px;} /> */}
                          
                         </colgroup>
                        <thead>
                            <tr>
                                <th className="large-width">GOLD</th>
                                <th>BUY</th>
                                <th>SELL</th>
                                <th>+ OR -</th>
                                <th>TIME</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className={"tr2"}>999 - 24k</td>
                                <td>56.3</td>
                                <td>56.9</td>
                                <td>-0.20</td>
                                <td>15:29:23</td>
                            </tr>
                            <tr>
                                <td className="large-width">999 - 24k</td>
                                <td>56.3</td>
                                <td>56.9</td>
                                <td>-0.20</td>
                                <td>15:29:23</td>
                            </tr>
                        </tbody> 
                        
                        <tfoot>
                        <tr className={"tr2"}>
                                <td className="large-width">999 - 24k</td>
                                <td>56.3</td>
                                <td>56.9</td>
                                <td>-0.20</td>
                                <td>15:29:23</td>
                            </tr>
                        </tfoot>
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
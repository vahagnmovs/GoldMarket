import React, {useState} from 'react';

type SearchCategoryProps = {
    title: string,

}


function SearchCategory({title}: SearchCategoryProps) {

    const [mouse, setMouse] = useState(false);


    return (
        <div onMouseEnter={() => setMouse(true)}
             onMouseLeave={() => setMouse(false)}
        >
            {
                mouse
                    ?
                    <>
                        <div className={"a"}>
                            <span>GOLD</span>
                            <span>BUY</span>
                            <span>SELL</span>
                            <span>+OR-</span>
                        </div>
                        <div className={"b"}>
                            <div>
                                <h3>WOMAN</h3>
                                <p>Rings</p>
                                <p>Sets</p>
                                <p>Engagement rings</p>
                                <p>Wedding rings</p>
                                <p>Pendants</p>
                                <p>Crosses</p>
                                <p>Necklaces</p>
                                <p>Chain</p>
                                <p>Bracelets</p>
                                <p>Other</p>
                            </div>
                            <div>
                                <h3>MAN</h3>
                                <p>Rings</p>
                                <p>Wedding rings</p>
                                <p>Pendants</p>
                                <p>Crosses</p>
                                <p>Chain</p>
                            </div>
                            <div>
                                <h3>CHILDREN</h3>
                                <p>Rings</p>
                                <p>Earrings</p>
                                <p>Pendants</p>
                                <p>Crosses</p>
                                <p>Bracelets</p>
                                <p>Other</p>
                            </div>
                        </div>
                    </>
                    :
                    <p>{title}</p>

            }
        </div>
    );
};

export default SearchCategory;
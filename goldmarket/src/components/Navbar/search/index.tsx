import React, {useState} from 'react';
import search  from "src/style/Icons/search.png"

const Search = () => {

    const [isOpenSearchModal, setIsOpenSearchModal] = useState(false)

    const toggleOpenModal = () => {
        setIsOpenSearchModal(!isOpenSearchModal)
    }

    return (
        <div>
            {
                isOpenSearchModal
                    ?
                    <div>
                        <div>
                            <input type="text"/>
                            <img src={search} alt="search" className={"searching-icon"}/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <span className={"text"}>ENTER KEYWORD TO SEARCH</span>
                        </div>
                        <button  onClick={toggleOpenModal}>x</button>
                    </div>
                    :
                    <div className={"searching flex justify-between align-center"}
                         onClick={toggleOpenModal}
                    >
                        <div className={"text"}>SEARCH</div>
                        <img className={"searching-icon"} src={search}
                             alt="search" />
                    </div>
            }
        </div>
    );
};

export default Search;
import React, { useState } from 'react';
import search from 'src/style/Icons/search.png';
import frame from 'src/style/Icons/Frame.png';

const Search = () => {
	const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
	const toggleOpenModal = () => {
		setIsOpenSearchModal(!isOpenSearchModal);
	};

	return (
		<div className={'relative'}>
			<div className={'search flex justify-between align-center'} onClick={toggleOpenModal}>
				<span className={'text'}>SEARCH</span>
				<img className={'searching-icon'} src={search} alt="search" />
			</div>
			{
				isOpenSearchModal
				&&
				<div className={'search_modal_open relative'}>
					<div className={'flex align-center'}>
						<input type="text" placeholder={'ENTER KEYWORD TO SEARCH'} />
						<img className={'searching-icon'} src={search} alt="search" />
					</div>
					<div className={'searching_block_text flex dir-col align-center'}>
						<img src={frame} alt="" />
						<span> ENTER KEYWORD TO SEARCH </span>
					</div>

					<button className={'search_close_btn'} onClick={toggleOpenModal}>x</button>
				</div>
			}
		</div>
	);
};

export default Search;
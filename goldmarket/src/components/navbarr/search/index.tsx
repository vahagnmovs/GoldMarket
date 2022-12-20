import React, {useState} from 'react';
import search from 'src/style/Icons/search.png';
import frame from 'src/style/Icons/Frame.png';

const Search = () => {
	const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
	const toggleOpenModal = () => {
		setIsOpenSearchModal(!isOpenSearchModal);
	};

	return (
		<div>
			<div className={'search_close  flex justify-between align-center'} onClick={toggleOpenModal}>
				<span className={'text'}>SEARCH</span>
				<img className={'searching-icon'} src={search} alt="search"/>
			</div>
			{
				isOpenSearchModal
				&&
				<div className={'search_modal_open'}>
					<div className={'flex align-center '}>
						<input type="text" placeholder={'ENTER KEYWORD TO SEARCH'}/>
						<img className={'searching-icon'} src={search} alt="search"/>
					</div>
					<div className={'searching_block_text flex dir-col  align-centnt'}>
						<img src={frame} alt=""/>
						<span> ENTER KEYWORD TO SEARCH </span>
					</div>
					<div className={'relative'}>
						<button className={'absolute'} onClick={toggleOpenModal}>x</button>
					</div>
				</div>

			}
		</div>
	);
};

export default Search;
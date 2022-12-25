import React, {useRef} from 'react';
import close from 'src/style/Icons/close.png';
import open from 'src/style/Icons/open.png';
import select from 'src/style/Icons/select.svg';
import { TDropDownProps } from './types';
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const DropDown = ({ menuOpen, toggleMenu, chosen, state, handleChange,colsDropDown }: TDropDownProps) => {

	const ref = useRef<null>(null);
	useOnClickOutside(ref, () => colsDropDown(false));


	return (
		<>
			<div className='flex align-center gap_8'  onClick={toggleMenu}>
				<img className={'icons'} src={chosen.url} alt="flag_img" />
				<span>{chosen.value}</span>
				<img className={'drop_down'} src={menuOpen ? close : open} alt="drop_down" />
			</div>
			{menuOpen && <ul ref={ref} className={'list_dropdown'}>
				{state.map(elem => {
					return (
						<li className='list_dropdown_items flex justify-between' onClick={() => handleChange(elem)} key={elem.id}>
							<div>
								<img className={'icons'} src={elem.url} alt="flag_img" />
								<span>{elem.value}</span>
							</div>
							{
								elem.id === chosen.id && <img className={'icon_select'} src={select} alt="chosen" />
							}
						</li>
					);
				})}
			</ul>}
		</>

	);
};

export default DropDown;
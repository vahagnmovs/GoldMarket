import React from 'react';
import close from 'src/style/Icons/close.png';
import open from 'src/style/Icons/open.png';
import { TDropDownProps } from './types';

const DropDown = ({ menuOpen, toggleMenu, chosen, state, handleChange }: TDropDownProps) => {
	return (
		<div>
			<div>
				<div className='flag' onClick={toggleMenu}>
					<img className={'flag_icon'} src={chosen.url} alt="flag_img" />
					<span>{chosen.value}</span>
					<img className={'drop_down'} src={menuOpen ? close : open} alt="drop_down" />
				</div>
			</div>
			{ menuOpen && <ul className={'flags'}>
				{state.map(elem => {
					return (
						<li className='flag' onClick={() => handleChange(elem)} key={elem.id}>
							<img className={'flag_icon'} src={elem.url} alt="flag_img" />
							<span>{elem.value}</span>
							{
								elem.id === chosen.id && <img src={open} alt="chosen" className={'drop_down'}/>
							}
						</li>
					);
				})}
			</ul>}
		</div>

	);
};

export default DropDown;
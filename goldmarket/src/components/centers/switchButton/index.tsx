import React from 'react';

type TSwitchButtonProps = {
  checked: boolean;
  handleCeckid: () => void;
}

const SwitchButton = ({ checked, handleCeckid }: TSwitchButtonProps) => {
	return (
		<div className="switch_content flex  align-center justify-center">
			<span >Collections</span>
			<div>
				<input onChange={handleCeckid} type="checkbox" className="checkbox" id="checkbox" />
				<label htmlFor="checkbox" className="label">
					<i className="a-moon"></i>
					<i className="fa-sun"></i>
					<div className='ball' />
					<span className={checked ? 'slider' : 'slider_activ'}></span>
				</label>

			</div>
			<span className={checked ? '' : 'red'}>Shopping centers</span>
		</div>
	);
};

export default SwitchButton;

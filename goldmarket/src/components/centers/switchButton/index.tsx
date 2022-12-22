import React from 'react';
type TSwitchButtonProps = {
	checked: boolean;
	handleCeckid: () => void;
}

const SwitchButton = ({ checked, handleCeckid }: TSwitchButtonProps) => {
	return (
		<div className="switch_content flex  align-center justify-center">
			<span >Collections</span>
			<div className='switch_btn'>
				<input onChange={handleCeckid} type="checkbox" className="checkbox" id="checkbox" />
				<label htmlFor="checkbox" className="label">
					<div className='ball' />
					<span className={checked ? 'slider' : 'slider activ'}></span>
				</label>

			</div>
			<span className={checked ? '' : 'red'}>Shopping centers</span>
		</div>
	);
};

export default SwitchButton;

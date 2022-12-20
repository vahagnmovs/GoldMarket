import React from 'react';
import svg from 'src/style/Icons/next-16.svg';
import { useNavigate } from 'react-router-dom';
import { TDataProps } from 'src/components/centers/types';
import 'src/style/components/_centr_style.scss';
import DrawMapOrShoppingCenters from 'src/components/centers/maps/drawMapOrShoppingCenter/indec';

type TCategoryAndMapListProps = {
    data: TDataProps[];

}

const MapList = ({ data }: TCategoryAndMapListProps) => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/shoppingcenters');
	};
	return (
		<div className={'product_button   justify-center'}>
			<div className="products flex  flex-wrap justify-between ">
				{
					data.map(item => <DrawMapOrShoppingCenters key={
						item.id
					}{...item} />)
				}
			</div>
			<div className="buttonSowMor flex justify-center">
				<button
					onClick={handleNavigate}>
					<div className={'flex align-center justify-center'}>
						<p>SHOW MORE</p>
						<img src={svg} alt="Shou More" />
					</div>
				</button>
			</div>
		</div>
	);
};
export default MapList;

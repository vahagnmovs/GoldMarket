import React from 'react';
import DrawCategoryOrCollection from 'src/components/centers/categorys/drawCategoryOrCollection';
import svg from 'src/style/Icons/next-16.svg';
import { useNavigate } from 'react-router-dom';
import { TDataProps } from 'src/components/centers/types';
import 'src/style/components/_centr_style.scss';

type TCategoryListProps = {
    data: TDataProps[];

}

const CategoryList = ({ data }: TCategoryListProps) => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/collections');
	};
	return (
		<div className={'product_button   justify-center'}>
			<div className="products flex  flex-wrap justify-between ">
				{
					data.map(item => <DrawCategoryOrCollection key={
						item.id
					}{...item} />)
				}
			</div>
			<div className="buttonSowMor flex  justify-center  ">
				<button
					onClick={handleNavigate}>
					<div className={'flex align-center justify-center'}>
						<p>SHOW MORE</p>
					</div>
				</button>
			</div>
		</div>
	);
};
export default CategoryList;

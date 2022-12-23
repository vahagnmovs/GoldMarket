import React, { useState } from 'react';
import presentImg from 'src/style/img/present-product.png';
import open from 'src/style/Icons/open.png';
import close from 'src/style/Icons/close.png';
import { TSearchCategoryProps } from './type';

function SearchCategory({ title }: TSearchCategoryProps) {
	const [mouse, setMouse] = useState(false);

	return (
		<li className={'flex justify-between align-center'}
			onMouseEnter={() => setMouse(true)}
			onMouseLeave={() => setMouse(false)}>
			<div className={'flex justify-between align-center'}>
				<span >{title}</span>
				<img className={'GOLD '} src={open} alt="" />
			</div>
			{
				mouse
					&&
						<div className='openning-navbar'>
							{/*silver-jewelry*/}
							<div className={'gold-jewelry flex justify-between'}>
								<ul>
									<li><a href="#">WOMAN</a></li>
									<li><a href="#">Rings</a></li>
									<li><a href="#">Sets</a></li>
									<li><a href="#">Engagement rings</a></li>
									<li><a href="#">Wedding rings</a></li>
									<li><a href="#">Pendants</a></li>
									<li><a href="#">Crosses</a></li>
									<li><a href="#">Necklaces</a></li>
									<li><a href="#">Chain</a></li>
									<li><a href="#">Bracelets</a></li>
									<li><a href="#">Other</a></li>
								</ul>

								{/*watches-jewelry*/}
								<ul className={'watches-jewelry'}>
									<li><a href="#">MAN</a></li>
									<li><a href="#">Rings</a></li>
									<li><a href="#">Wedding rings</a></li>
									<li><a href="#">Pendants</a></li>
									<li><a href="#">Crosses</a></li>
									<li><a href="#">Chain</a></li>
								</ul>

								<ul className={'watches-jewelry'} >
									<li><a href="#">CHILDREN</a></li>
									<li><a href="#">Rings</a></li>
									<li><a href="#">Earrings</a></li>
									<li><a href="#">Pendants</a></li>
									<li><a href="#">Crosses</a></li>
									<li><a href="#">Bracelets</a></li>
									<li><a href="#">Other</a></li>
								</ul>

								<img className='presentImg' src={presentImg} alt='' />

							</div>


						</div>
			}
		</li>
	);
}

export default SearchCategory;
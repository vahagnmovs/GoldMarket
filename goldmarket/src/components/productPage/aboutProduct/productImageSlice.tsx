import React, {useState} from 'react';
import right from 'src/style/Icons/right.png';


interface ProductImageSliceProps {
    images: string[]
}

const ProductImageSlice = ({images}:ProductImageSliceProps ) => {
	const [imageIndex, setImageIndex] = useState(0);
	const nextImage = () => {
		if(imageIndex === images.length - 1) {
			setImageIndex(0);
			return;
		}
		setImageIndex(imageIndex + 1);
	};
	const prevImage = () => {
		if (imageIndex === 0) {
			setImageIndex( images.length - 1);
			return;
		}
		setImageIndex( imageIndex - 1);
	};
	const clickImage = (i: number) => {
		setImageIndex(i);
	};
	return (
		<div className={'product_smole_carousel'}>
			<div className={'product_smole_carousel_top_photo'}>
				<img  src={images[imageIndex]} alt=""/>
			</div>
			<div className={'product_smole_carousel_slider flex align-center'} >

				{images.map((image, i) =>
					<img
						key={image}
						src={image} alt="no photo"
						onClick={() => clickImage(i)}
						className={imageIndex === i ? 'active': ''}
					/>
				)}
				<button onClick={nextImage}><img src={right}/></button>
			</div>
		</div>
	);
};

export { ProductImageSlice };
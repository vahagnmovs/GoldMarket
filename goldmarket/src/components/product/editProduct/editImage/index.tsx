import React, {useEffect, useRef, useState} from 'react';

type TProps = {
    handleImgSrces: (arr: []) => void
    initialData: any
}
type TImageProps = {
    url?: string;
    id?: number;
}

const EditdImages: React.FC<TProps> = ({ handleImgSrces, initialData }) => {


	const [images, setImages] = useState<any>(initialData);
	const idRef = useRef(0);

	const changeImageState = (src: any) => {
		setImages([...images, ...src]);
	}

	useEffect(() => {
		handleImgSrces(images);
	}, [images.length]);


	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

		const {files}: any = e.target;
		changeImageState([...files].map((file) => {
			return {
				src: URL.createObjectURL(file),
				id: ++idRef.current
			};
		}));
		e.target.value = '';
	};


	const deleteImg = (id: string) => {
		setImages((prev: any) => prev.filter((img: any) => img.id !== id));
	};

	return (
		<div>
			<h3> ADD IMAGES / VIDEOS </h3>
			<input className='inputPhoto' multiple={true} accept="image/jpeg , image/png"
				onChange={handleInputChange} type="file"/>

			{
				images.length !== 0
				&&
				<div className="imgDiv">
					{
						images.map((e: any) => <div key={e.id}>
							<img src={e.src}/>
							<button onClick={() => deleteImg(e.id)}>X</button>
						</div>)
					}
				</div>

			}

		</div>
	);
};


export default EditdImages;
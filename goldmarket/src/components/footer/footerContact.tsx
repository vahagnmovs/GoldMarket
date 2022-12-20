import React from 'react';

type TFooterContact = {
    title: string,
    data: string[]
}
const FooterContact = ({title, data}: TFooterContact) => {
	return (
	//FIXME: change key...
		<>
			<li>{title}</li>
			{data.map(elem => <li key={Math.random()}>{elem}</li>)}
		</>
	);
};
export {FooterContact};
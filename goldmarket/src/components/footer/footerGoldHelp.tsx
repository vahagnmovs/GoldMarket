import React from 'react';
import {TGoldCenter} from '../../data/footerData';
import {Link} from 'react-router-dom';

type TFooterLinks = {
    title: string
    data:  TGoldCenter[],
}

const FooterGoldHelp = ({title, data }:TFooterLinks ) =>{
	return (
		<>
			<li>{title}</li>
			{data.map(link => <li key={Math.random()}> <Link to={link.path}>{link.name}</Link> </li>)}
		</>
	);
};

export {FooterGoldHelp};
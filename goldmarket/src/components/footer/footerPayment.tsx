type TFooterPayment = {
    data: string[]
}
const FooterPayment = ({data}: TFooterPayment) => {
    return (
        //FIXME: change key...
        <>
            {data.map(icon => <li key={Math.random()}><img src={icon} alt=""/></li>)}
        </>
    );
};

export {FooterPayment};


type TPaymentsLink = {
    data: string[],

}

export const PaymentsLink = ({data}: TPaymentsLink) => {
    return (
        <div className={"icon-pay footer_soc_links"}>

            <ul className={"social_links_icons  flex  justify-center "}>
            {data.map(item =>
                <li key={item}>
                    <img src={item} alt=""/>
                </li>
            )}
            </ul>

        </div>
    );
};


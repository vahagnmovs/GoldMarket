function BasicCard({item}) {
    return (
        <div>
            <div style={{
                width: 200,
                height: 200,
                border: "1px solid gray",
                color: "rgba(255, 255, 255, 0.5)",
            }}>
                <img src={item.image} height={198} alt=""/>

            </div>
            <div style={{color: "black", display: "flex", justifyContent: "space-between", width: "200px"}}>
                <div style={{display: "flex", gap: "10px"}}>
                    <p>{item.newPrice}</p>
                    <p>{item.oldPrice}</p>
                </div>
                <div>
                    <p>{item.seller}</p>
                </div>
            </div>
            <div>
                <p style={{color: "black"}}>
                    {item.category}
                </p>
            </div>
        </div>
    );
}

export default BasicCard;

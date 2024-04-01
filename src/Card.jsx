const Card = ({item}) => {
    return (
        <div className="cards">
           {item.map((Val) => {
                return (
                    <div className="card-id" key={Val.id}>
                        <div className="card-img">
                            <img src={Val.img} />
                        </div>
                    </div>
                );
           })};
        </div>
    );
};

export default Card;

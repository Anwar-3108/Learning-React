
const Card = ({ name, image, price, rating, cusines }) => {
    return (
      <>
        <div className="card-div">
          <div className="img-div">
            <img src={image} alt="img" />
          </div>
          <div className="text-div">
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{cusines}</h4>
            <h5>{rating}</h5>
          </div>
        </div>
      </>
    );
  };
  

export default Card;
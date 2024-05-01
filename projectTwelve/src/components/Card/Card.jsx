import style from "./card.module.scss";

const Card = ({title, description, image, color}) => {

    const colorObj = {
        borderTopColor: color
    }
  return (
    <>
      <div className={style.cardDiv} style={colorObj}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt="the card image" />
      </div>
    </>
  );
};

export default Card;

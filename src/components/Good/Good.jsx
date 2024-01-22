import "./Good.css";

const Good = (props) => {
  return (
    <div className='good'>
      <h4 className='good-title'>{props.name}</h4>
      <img src={props.photoUrl} alt={props.name} className='good-photo' />
      <p className='good-description'>{props.description}</p>
      <p className='good-price'>{props.price}</p>
      <button className='godd-add-to-cart'>Добавить в корзину</button>
    </div>
  );
};

export default Good;

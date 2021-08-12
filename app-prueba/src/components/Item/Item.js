import './Item.css';

const Item = ({name, price, img, link}) => {  
    return(
        <a className="item" href={link} title={name + ' $' + price}>
            <img className="itemImg" src={img} alt="" />
            <div className="itemName">{name}</div>
            <i class="fas fa-desktop" />
            <div className="itemPrice">
                $ {price}
            </div>
        </a>     
    )
}

export default Item;
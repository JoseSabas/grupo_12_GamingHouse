import './ProductCartItem.css';

const ProductCartItem = ({name, description, img, price, color, material, size}) => {  
    return(
        <div className="productCartItem">
            <div className="productCartItemTop">
                <div className="productCartItemTopLeft">
                    <input type="checkbox" /> &nbsp;
                    <span className="text"><b>{name}</b></span>
                </div>
                <i className="fas fa-trash-alt" />
            </div>  

            <div className="productCartItemBottom">
                <div className="productCartItemBottomLeft">
                    <img src={img} alt={name} />
                    <div className="controls">
                        <i className="fas fa-minus-circle" />
                        <span>1</span>
                        <i className="fas fa-plus-circle" />
                    </div>
                </div>
                <div className="productCartItemBottomRight">
                    <div className="productCartItemBottomRightTop">
                        <span title={description}><b><i>{description}</i></b></span>
                    </div>
                    <div className="productCartItemBottomRightMiddle">
                        <div className="productCartItemBottomRightMiddleItem">
                            <b>Color</b>
                            <span style={{width:'10px', height:'10px', margin:' 4px auto', backgroundColor:color}}/>
                        </div>
                        <div className="productCartItemBottomRightMiddleItem">
                            <b>Material</b>
                            <span>{material}</span>
                        </div>
                        <div className="productCartItemBottomRightMiddleItem">
                            <b>Tamaño</b>
                            <span>{size}</span>
                        </div>
                    </div>
                    <div className="productCartItemBottomRightBottom">
                        <h2>$ {price}</h2>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default ProductCartItem;
import './ProductCartItem.css';

const ProductCartItem = ({name, description, img}) => {  
    return(
        <div className="productCartItem">
            <div className="productCartItemTop">
                <span class="filename__base">this-file-has-a-really-really-really-long-filenameee-----------.</span>
                <span class="filename__extension">pdf</span>
                {/*<div className="productCartItemTopLeft">                  
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
                <div className="productCartItemTopRight">
                    <i class="fas fa-trash-alt" />
                </div>*/}                
            </div>
            <div className="productCartItemBottom">
                B
            </div>           
        </div>
    )
}

export default ProductCartItem;
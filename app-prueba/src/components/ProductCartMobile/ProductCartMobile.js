import ProductCartItem from '../ProductCartItem/ProductCartItem';
import './ProductCartMobile.css';

const ProductCartMobile = () => {  
    return(
        <div className="productCartMobile">
           <div className="productCartSummaryMobile">
                <div className="productCartSummaryTableMobile">
                    <div className="tableIcon"><i className="far fa-money-bill-alt" /></div>
                    <div className="tableIcon"><i className="fas fa-shuttle-van" /></div>
                    <div className="tableIcon"><i className="fas fa-money-bill-alt" /></div>
                    <div className="td title">Subtotal&nbsp;&nbsp;&nbsp;</div>
                    <div className="td">$ 0.00</div>
                    <div className="td title">Envío&nbsp;&nbsp;&nbsp;</div>
                    <div className="td">$ 0.00</div>
                    <div className="td title">Total&nbsp;&nbsp;&nbsp;</div>
                    <div className="td">$ 0.00</div>
                </div>
                <button className="productCartSummaryButtonMobile">
                    Proceder al pago (0 productos)
                </button>
           </div>
           <div className="productCartItemsMobile">
                <ProductCartItem name="Monitor AOC 24 pulgadas - Monitor AOCaaaaaaaaaaa" description="AOC C24G1A Monitor de juego curvo sin marco de 24 pulgadas, FHD 1920 x 1080, 1500 R, VA, 1 ms MPRT, 165 Hz (144 Hz compatible), FreeSync Premium, altura ajustable" img="https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_UL320_.jpg" />
           </div>
        </div>
    )
}

export default ProductCartMobile;
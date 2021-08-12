import ProductCartItem from '../ProductCartItem/ProductCartItem';
import './ProductCartMobile.css';

const ProductCartMobile = () => {  
    return(
        <>
            <div className="productCartSummaryMobile">
                <div className="productCartSummaryItemMobile">
                    <i className="fas fa-money-bill-alt" />
                    <p><b>Subtotal</b>: $40,419.00</p>
                </div>
                <div className="productCartSummaryItemMobile">
                    <i className="fas fa-shuttle-van" />
                    <p><b>Envío</b>: $150.00</p>
                </div>
                <div className="productCartSummaryItemMobile">
                    <i className="fas fa-money-bill-alt" />
                    <p><b>Total</b>: $40,569.00</p>
                </div>
                <button className="productCartSummaryButtonMobile">
                    Proceder al pago (3 productos)
                </button>
            </div>
            <ProductCartItem name="Monitor AOC 24 pulgadas" description="AOC C24G1A Monitor de juego curvo sin marco de 24 pulgadas, FHD 1920 x 1080, 1500 R, VA, 1 ms MPRT, 165 Hz (144 Hz compatible), FreeSync Premium, altura ajustable" img="https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_UL320_.jpg" price={4940} color="#CBE31F" material="Madera" size="Mediano" />
            <ProductCartItem name="Monitor Samsung 49 pulgadas" description="Samsung Monitor Gaming 49 pulgadas Super UltraWide QLED, Resolución 3840 x 1080, 144 Hz (Modelo LC49HG90DMLXZX)" img="https://m.media-amazon.com/images/I/81jiUqRKBcL._AC_UL320_.jpg" price={23099} color="#13A9A9" material="Metal" size="Grande" />
            <ProductCartItem name="Monitor Asus 27 pulgadas" description="Asus Monitor Gamer VG278QR, 27 pulgadas, Full HD, 0.5ms, 165Hz, Compatible con NVIDI G-Sync, Adaptive-Sync" img="https://m.media-amazon.com/images/I/81eGtZyyavL._AC_UL320_.jpg" price={12380} color="#595956" material="Porcelana" size="Chico" />
        </>
        
    )
}

export default ProductCartMobile;
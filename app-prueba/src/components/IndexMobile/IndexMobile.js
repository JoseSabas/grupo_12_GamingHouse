import ProductCartMobile from '../ProductCartMobile/ProductCartMobile';
import HomeMobile from '../HomeMobile/HomeMobile';
import './IndexMobile.css';

const IndexMobile = () => {  
    return(
        <>
            <div className="header">
                <i className="fas fa-dice-d20" />
                <div className="indexMobileHeaderRight">
                    <div className="indexMobileSearch">
                        <i className="fas fa-search" />
                        <form className="indexMobileForm">
                            <input type="text" placeholder="Buscar artículo" className="indexMobileInput" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="main">
                {/*<ProductCartMobile />*/}
                <HomeMobile />
            </div>
            
            <div className="footer">
                <nav className="indexMobileNav">
                    <a href="#" className="indexMobileNavA"><i className="fas fa-home" /></a>
                    <a href="#" className="indexMobileNavA"><i className="fas fa-user" /></a>
                    <a href="#" className="indexMobileNavA"><i className="fas fa-shopping-cart" /></a>
                    <a href="#" className="indexMobileNavA"><i className="fas fa-bars" /></a>
                </nav>
            </div>
        </>
    )
}

export default IndexMobile;
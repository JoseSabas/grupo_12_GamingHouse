import ProductCartMobile from '../ProductCartMobile/ProductCartMobile';
import './IndexMobile.css';

const IndexMobile = () => {  
    return(
        <>
            <div className="header">
                HEADER
            </div>
            <div className="main">
                <span class="filename__base">this-file-has-a-really-really-really-long-filenameee------</span>
                <span class="filename__extension">pdf</span>
            </div>
            <div className="footer">
                FOOTER
            </div>
            {/*<header>
                <i className="fas fa-dice-d20" />
                <div className="indexMobileHeaderRight">
                    <div className="indexMobileSearch">
                        <i className="fas fa-search" />
                        <form className="indexMobileForm">
                            <input type="text" placeholder="Buscar..." className="indexMobileInput" />
                        </form>
                    </div>
                </div>                
            </header>
            <main>
                <ProductCartMobile />
            </main>
            <footer>
                <nav className="indexMobileNav">
                    <a href="#" className="indexMobileNavA"><i className={"fas fa-home"} /></a>
                    <a href="#" className="indexMobileNavA"><i className="fas fa-user" /></a>
                    <a href="#" className="indexMobileNavA"><i className="fas fa-shopping-cart" /></a>
                    <a href="#" className="indexMobileNavA"><i className="fas fa-bars" /></a>
                </nav>
            </footer>*/}
        </>
    )
}

export default IndexMobile;
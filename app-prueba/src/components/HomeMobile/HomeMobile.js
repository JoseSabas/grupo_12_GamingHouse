import Item from '../Item/Item';
import './HomeMobile.css';

const HomeMobile = () => {  
    return(
        <>
            <img src="/banner.jpg" className="homeMobileBanner" alt="" />
            <p className="homeMobileTitle">Más vendidos</p>
            <div className="homeMobileContent">
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_UL320_.jpg" link="/a1" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81jiUqRKBcL._AC_UL320_.jpg" link="/a2" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81eGtZyyavL._AC_UL320_.jpg" link="/a3" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_UL320_.jpg" link="/a1" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81jiUqRKBcL._AC_UL320_.jpg" link="/a2" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81eGtZyyavL._AC_UL320_.jpg" link="/a3" />
            </div>
            <br/><br/>
            <p className="homeMobileTitle">Ofertas de la semana</p>
            <div className="homeMobileContent">
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_UL320_.jpg" link="/a1" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81jiUqRKBcL._AC_UL320_.jpg" link="/a2" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81eGtZyyavL._AC_UL320_.jpg" link="/a3" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_UL320_.jpg" link="/a1" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81jiUqRKBcL._AC_UL320_.jpg" link="/a2" />
                <Item name="pantalla" price={10} img="https://m.media-amazon.com/images/I/81eGtZyyavL._AC_UL320_.jpg" link="/a3" />
            </div>
        </>
        
    )
}

export default HomeMobile;
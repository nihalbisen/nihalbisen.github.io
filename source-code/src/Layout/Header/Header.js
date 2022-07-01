import search from "../../Images/search.png";
import user from "../../Images/user.png";
import shoppingBag from "../../Images/shopping-bag.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default function Header(){
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return(
        <>
        <ToastContainer/>
        <header className="aem-Grid aem-Grid--12">
            <a href="#/home" aria-label="Home" className="logo aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--2 aem-GridColumn--phone--6">
                <span data-content="VENIA">VENIA</span>
            </a>
            <nav id="drawer" className="aem-GridColumn aem-GridColumn--default--hide aem-GridColumn--tablet--hide aem-GridColumn--phone--12">
                <ul>
                    <li><a href="/">Menu Item</a></li>
                    <li><a href="/">Menu Item</a></li>
                    <li><a href="/">Menu Item</a></li>
                    <li><a href="/">Menu Item</a></li>
                </ul>
            </nav>
            <nav role="navigation" aria-label="Main" className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--5 aem-GridColumn--phone--hide">
                <ul className="menu">
                    <li><a href="#/home" aria-label="Women">Women</a></li>
                    <li><a href="/" aria-label="Men">Men</a></li>
                    <li><a href="/" aria-label="Smart Gear">Smart Gear</a></li>
                    <li><a href="/" aria-label="Accessories">Accessories</a></li>
                </ul>
            </nav>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--5 aem-GridColumn--phone--6">
                <ul className="side-menu">
                    <li><a href="/"  aria-label="Search"><img className="side-menu-icon" src={search} alt="Search"/><span>Search</span></a></li>
                    <li id="user"><a href="/"  aria-label="User"><img className="side-menu-icon" src={user} alt="User"/><span>Sign in</span></a></li>
                    <li> <a href="#/cart"  aria-label="Cart"><img className="side-menu-icon" src={shoppingBag} alt="Shopping Bag"/>{cartTotalQuantity}</a></li>
                </ul>
            </div>
        </header>
        </>
    );
}
import search from "../../Images/search.png";
import user from "../../Images/user.png";
import shoppingBag from "../../Images/shopping-bag.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import drawer from "../../Images/align-justify.png";

export default function Header(){
    let { cartTotalQuantity } = useSelector((state) => state.cart);

    const openNav = () =>{
        document.getElementById("mySidenav").style.width = "100%";
    }
    const closeNav = () =>{
        document.getElementById("mySidenav").style.width = "0";
    }
    return(
        <>
        <ToastContainer/>
        <header className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--2 aem-GridColumn--phone--8">
                    <div id="mySidenav" class="sidenav">
                        <span class="closebtn" onClick={closeNav} >&times;</span>
                        <a href="/" className="cat-head" aria-label="shop-categories">Shop Categories</a>
                        <a href="/" aria-label="women">Women</a>
                        <a href="/" aria-label="men">Men</a>
                        <a href="/" aria-label="smart-gear">Smart Gear</a>
                        <a href="/" aria-label="accessories">Accessories</a>

                        <div className="sidenav-bottom">
                            <a href="/" aria-label="Account"><img src={user} alt="Search"/>Account</a>
                            <a href="/" aria-label="sign in">Sign-in</a>
                        </div>
                    </div> 

                    {/* <!-- Use any element to open the sidenav --> */}
                    <img src={drawer} alt="drawer menu" onClick={openNav} id="drawer-menu"/>
                
                
                <a href="/" aria-label="Home" className="logo">
                    <span data-content="VENIA">VENIA</span>
                </a>
            </div>
            
            <nav role="navigation" aria-label="Main" className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--5 aem-GridColumn--phone--hide">
                <ul className="menu">
                    <li><a href="/" aria-label="Women">Women</a></li>
                    <li><a href="/" aria-label="Men">Men</a></li>
                    <li><a href="/" aria-label="Smart Gear">Smart Gear</a></li>
                    <li><a href="/" aria-label="Accessories">Accessories</a></li>
                </ul>
            </nav>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--5 aem-GridColumn--phone--4">
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
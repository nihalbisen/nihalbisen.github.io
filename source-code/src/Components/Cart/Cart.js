import { useSelector, useDispatch } from "react-redux/es/exports";
import { decreaseCart, addToCart, getTotals, removeFromCart } from "./cartSlice";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import trash from "../../Images/trash-2.png";
import save from "../../Images/heart.png";
import edit from "../../Images/edit-2.png";
import paypalbtn from "../../Images/PP_BTN.png";
import arrowleft from "../../Images/arrow-left.png";
import fav from "../../Images/heart.png";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const { fetchProduct } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handelDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }
    const handleIncreaseCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const [Prod, setProd] = useState([]);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=4`)
        .then((res) => res.json())
        .then((data) => setProd(data));
         // eslint-disable-next-line
    }, []);

    return (
        <>
        <section className=" cart aem-Grid aem-Grid--12">
            <div className="cart-head">
                <h2>Your Shopping Bag</h2>
                <hr />
            </div>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your Cart is currently Empty</p>
                    <div className="start-shopping">
                        <a href="#/home" aria-label="home">
                            <img src={arrowleft} alt="arrow left" /> Start Shopping
                        </a>
                    </div>
                </div>
            ) : (
                <>
                    <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                        <div className="cart-products">
                            {cart.cartItems?.map(cartItem => (
                                <div key={cartItem.id} className="cart-container aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                                        <img className="cart-prod-img" src={cartItem.image} alt={cartItem.title} />
                                    </div>
                                    <div className="cart-prod-desc aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                                        <h4>{cartItem.title}</h4>
                                        <span>Size : Medium</span>
                                        <span>Color : Storm</span>
                                        <span>${cartItem.price * cartItem.cartQuantity}</span>
                                    </div>
                                    <div className="quantity aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                                        <button type="button" onClick={() => handelDecreaseCart(cartItem)}>-</button>
                                        <input type="text" value={cartItem.cartQuantity} />
                                        <button type="button" onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                    </div>
                                    <div className="cart-buttons aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                                        <button aria-label="edit item"><img src={edit} alt="edit" />Edit item</button>
                                        <button aria-label="remove" onClick={() => handleRemoveFromCart(cartItem)}><img src={trash} alt="remove" />Remove</button>
                                        <button aria-label="save"><img src={save} alt="save" />Save for later</button>
                                    </div>
                                </div>
                            ))}
                            <div className="aem-GridColumn aem-GridColumn--default--12">
                                <div class="tabs">
                                    <div class="tab">
                                        <input type="checkbox" id="chck1" className="accrodian" />
                                        <label class="tab-label" for="chck1">Estimate your Shipping</label>
                                        <p class="tab-content">
                                            Shipping to 91001
                                        </p>
                                    </div>
                                    <div class="tab">
                                        <input type="checkbox" id="chck2" className="accrodian" />
                                        <label class="tab-label" for="chck2">Enter a Coupon Code</label>
                                        <p class="tab-content">
                                            20% discount applied
                                        </p>
                                    </div>
                                    <div class="tab">
                                        <input type="checkbox" id="chck3" className="accrodian" />
                                        <label class="tab-label" for="chck3">Apply Gift Card</label>
                                        <div class="tab-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                        <div className="pricing-summary">
                            <h4>Pricing Summary</h4>
                            <span>Subtotal: ${cart.cartTotalAmount}</span>
                            <span>Coupon: $0</span>
                            <span>Gift Card: $0</span>
                            <span>Estimated Tax: $0</span>
                            <span>Estimated Shipping: FREE</span>
                            <span>Estimated Total: ${cart.cartTotalAmount}</span>
                            <div className="checkout-btn">
                                <button>Checkout</button>
                                <a href="/" aria-label="PayPal"><img src={paypalbtn} alt="PayPal" /></a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>

        {/* recently view product */}
        <section className="aem-Grid aem-Grid--12 recent">
            <h3 className="recent-head">Recently Viewed</h3>
            {Prod.map((product) => {
                  return (
                <div key={product.id} className="prod-items aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--4 aem-GridColumn--phone--10">
                    <div className="prod-image">
                        <a onClick={() => { fetchProduct(product.id) }} href="#/product"><img src={product.image} alt={product.title} /></a>
                    </div>
                    <a className="prod-title" onClick={() => { fetchProduct(product.id) }} href="#/product">{product.title}</a>
                    <span className="prod-price">${product.price}</span>
                    <img className="fav-prod" src={fav} alt="add favorite" />
                </div>
                  )
                })
            }
        </section>
        </>
    );
}
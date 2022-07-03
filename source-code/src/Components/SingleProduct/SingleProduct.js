import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import Quantity from "../Quantity/Quantity";
import { addToCart } from "../Cart/cartSlice";
import save from "../../Images/heart.png";
import share from "../../Images/share-2.png";
import fabric from "../../Images/fabric.png";
import nylon from "../../Images/nylon.png";
import sweat from "../../Images/sweat.png";
import breathable from "../../Images/breathable.png";


export default function SingleProduct(){
    const productId = useSelector(state => state.fetchedid);
    const [DataProd, setDataProd] = useState([]);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setDataProd(data));
         // eslint-disable-next-line
    }, []);

    const dispatch = useDispatch();
    

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product));
       
    }

    return(
        <>
        <section className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 aem-Grid aem-Grid--12">
                <div className="product-img-slide aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide aem-GridColumn--tablet--hide">
                    <img src={DataProd.image} alt={DataProd.title}/>
                    <img src={DataProd.image} alt={DataProd.title}/>
                    <img src={DataProd.image} alt={DataProd.title}/>
                    <img src={DataProd.image} alt={DataProd.title}/>
                    <img src={DataProd.image} alt={DataProd.title}/>
                </div>
                <div className="product-img aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                    <img src={DataProd.image} alt={DataProd.title}/>
                </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 prod-desc">
                <span className="sprod-category">{DataProd.category}</span>
                <h3 className="product-title">{DataProd.title}</h3>
                <span className="product-price">${DataProd.price}</span>
                <article className="product-description">{DataProd.description}</article>
                    <form action="/" target="">
                        <div>
                            <h4 className="attribute">Colors</h4>
                            <input className="colors colors-gr1" type="checkbox" name="gr1" value="gr1" />
                            <input className="colors colors-gr2" type="checkbox" name="gr2" value="gr2" />
                            <input className="colors colors-gr3" type="checkbox" name="gr3" value="gr3" />
                            <input className="colors colors-gr4" type="checkbox" name="gr4" value="gr4" />
                        </div>
                        <div className="size-ar">
                            <h4 className="attribute">Size</h4>
                            <input type="radio" id="xs" name="size" value="xs" />
                            <label htmlFor="xs">XS</label>
                            <input type="radio" id="s" name="size" value="s" />
                            <label htmlFor="s">S</label>
                            <input type="radio" id="m" name="size" value="m" />
                            <label htmlFor="m">M</label>
                            <input type="radio" id="l" name="size" value="l" />
                            <label htmlFor="l">L</label>
                            <input type="radio" id="xl" name="size" value="xl" />
                            <label htmlFor="xl">XL</label>
                        </div>
                        <div>
                            <h4 className="attribute">Quantity</h4>
                            <Quantity />
                        </div>
                    </form>
                    <div className="add-to-cart">
                        <button onClick={() => {handleAddToCart(DataProd)}}>ADD TO CART</button>
                    </div>
                    <div className="product-social">
                        <a href="/" aria-label="Save"> <img src={save} alt="Save" /> Save</a>
                        <a href="/" aria-label="Share"> <img src={share} alt="Share" /> Share</a>
                    </div>
            </div>
        </section>
        <section className="aem-Grid aem-Grid--12 sprod-bottom">
            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <h3 className="product-title">{DataProd.title}</h3>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <span id="desc-title">Description</span>
                <article className="desc-bottom">{DataProd.description}</article>
                <hr className="bottom-div"/>
            </div>
            <div className="bottom-sidecol aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <span id="desc-title">Details</span>
                <div className="details-icon">
                    <span><img src={sweat} alt="Sweat-wicking"/>Sweat-wicking</span>
                    <span><img src={breathable} alt="Breathable"/>Breathable</span>
                    <span><img src={fabric} alt="Lightweight fabric"/>Lightweight fabric</span>
                    <span><img src={nylon} alt="nylon"/>69% nylon, 31% lycra</span>
                </div>
            </div>
        </section>  
        </>
    );
    
}

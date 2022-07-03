import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useState } from "react";
import fav from "../../Images/heart.png";
import Banner from "../Banner/Banner";
import Sidebar from "../Sidebar/Sidebar";
import ReactPaginate from "react-paginate";

export default function ProductCards(props) {
  const dispatch = useDispatch();
  const { fetchProduct } = bindActionCreators(actionCreators, dispatch);
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 9;
  const pagesVisited = pageNumber * productPerPage;
  // eslint-disable-next-line
  const [prodData, setData] = useState([]);
  
  const sorted = [...props.data].sort((a, b) => b["price"] - a["price"]);

  const pageCount = Math.ceil(props.data.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  
  const sortByPrice = (e) => {
     //console.log(e.target.value);
    if (e.target.value === "hightolow") {
      setData(sorted);
    }
    else if (e.target.value === "lowtohigh") {
      setData(sorted.reverse());
    }
    else{
      setData(props.data);
    }
  }
  
  
  return (
    <>
      <Banner />
      <section className="aem-Grid aem-Grid--12 products-grid">
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide aem-GridColumn--tablet--hide">
          <Sidebar />
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--6">
            <span className="result-count">{props.data.length} Results</span>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--6">
            <select className="sorting" onChange={sortByPrice}>
              <option value="latest">Sort by Latest</option>
              <option value="hightolow">Price: High to Low</option>
              <option value="lowtohigh">Price: Low to High</option>
            </select>
          </div>
          
          {  prodData.length !== 0 ? (
            
            prodData
              .slice(pagesVisited, pagesVisited + productPerPage)
              .map((product) => {
                return (
                  <>
                    <section key={product.id} className="prod-items aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12">
                      <div className="prod-image">
                        <a onClick={() => { fetchProduct(product.id) }} href="#/product"><img src={product.image} alt={product.title} /></a>
                      </div>
                      <a className="prod-title" onClick={() => { fetchProduct(product.id) }} href="#/product">{product.title}</a>
                      <span className="prod-price">${product.price}</span>
                      <img className="fav-prod" src={fav} alt="add favorite" />
                    </section>
                  </>
                );
              })

          ):(

              props.data
                .slice(pagesVisited, pagesVisited + productPerPage)
                .map((product) => {
                  return (
                    <>
                      <section key={product.id} className="prod-items aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12">
                        <div className="prod-image">
                          <a onClick={() => { fetchProduct(product.id) }} href="#/product"><img src={product.image} alt={product.title} /></a>
                        </div>
                        <a className="prod-title" onClick={() => { fetchProduct(product.id) }} href="#/product">{product.title}</a>
                        <span className="prod-price">${product.price}</span>
                        <img className="fav-prod" src={fav} alt="add favorite" />
                      </section>
                    </>
                  );
                })

          )}
          
         
          

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </section>
    </>
  );
}

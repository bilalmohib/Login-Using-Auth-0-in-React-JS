import React from "react";
//Importing History for Routing to Sub-Products of Products
import { useHistory } from 'react-router-dom';
//Importing the All Products JSON
import AllProducts from "../../data/Products/AllProducts";
//Importing the product component which is to be looped
import Product from "../SingleProduct";
//Importing the stylesheet
import "./style.scss";

const Products = (props) => {
    const history = useHistory();

    const MoveTo = (path) => {
        // alert(path)
        history.push(`${path}`)
    }
    return (
        <div className="container">
            <h3 className="pHeading">{props.infoText}</h3>
            {/* Rendering the Products */}
            <ul className="ml-4 mt-4">
                {AllProducts.map((JSON, i) => {
                    return <li onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents`)} className={`AllProductsContainer`} key={i}>
                        <div>
                            <Product
                                index={JSON.id}
                                text={JSON.text}
                                url={JSON.url}
                            />
                        </div>
                    </li>
                })}
            </ul>
            {/* Rendering the Products */}
        </div>
    )
}
export default Products;
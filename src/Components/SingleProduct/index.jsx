import React from "react";
import "./style.scss";

const Product = (props) => {
    return (
        <div className="SingleProduct">
            <img className={`pImage`} src={props.url} alt={props.text} title={props.text} />
            <br /><br />
            <h5 className={`pTextStyle`}>{props.text}</h5>
        </div>
    )
}
export default Product;
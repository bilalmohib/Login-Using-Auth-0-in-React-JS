import React from "react";
import Header from "../../Components/Header";
import NavHheader from "../../Components/NavHeader";
import Products from "../../Components/Products";

const Home = () => {
    return (
        <>
            <Header />
            <NavHheader Nav="Product" text="All Products"/>
            <Products infoText="What product category are you looking for?" />
        </>
    )
}
export default Home;
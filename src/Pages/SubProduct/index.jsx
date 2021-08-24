import React from "react";
import Header from "../../Components/Header";
import NavHheader from "../../Components/NavHeader";
import SubProducts from "../../Components/SubProducts";

const SubProduct = () => {
    return (
        <>
            <Header />
            <NavHheader Nav="SubProduct" text="All Products" text2="bio-plus® Process Components" />
            <SubProducts infoText="What process component are you looking for?" />
        </>
    )
}
export default SubProduct;
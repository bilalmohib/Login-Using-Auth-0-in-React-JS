import React from "react";
import Header from "../../Components/Header";
import NavHheader from "../../Components/NavHeader";
import SubSubProducts from "../../Components/SubSubProducts";

const SubSubProduct = () => {
    return (
        <>
            <Header />
            <NavHheader Nav="SubSubProduct" text="All Products" text2="bio-plus® Process Components" text3="Process Hose Assemblies & Hose Fittings" />
            <SubSubProducts infoText="Which assembly variation do you want to configurate?" />
        </>
    )
}
export default SubSubProduct;
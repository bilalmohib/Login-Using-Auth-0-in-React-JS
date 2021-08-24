import React from "react";
import "./style.scss";

const Arrow = () => {
    return (
        <i className="RightArrow fas fa-chevron-right"></i>
    )
}

const NavHeader = (props) => {
    return (
        <>
            {/* As a heading */}
            <nav className={`NavHeader`}>
                {(props.Nav == "Product") ? (
                    <div className="navTextDiv container-fluid">
                        <span className="navheader-text mb-0">{props.text}</span>
                    </div>
                ) : (props.Nav == "SubProduct") ? (
                    <div className="navTextDiv container-fluid">
                        <span className="navheader-text mb-0">{props.text}  <Arrow /> {props.text2} </span>
                    </div>
                ) : (props.Nav == "SubSubProduct") ? (
                    <div className="navTextDiv container-fluid">
                        <span className="navheader-text mb-0">{props.text}  <Arrow /> {props.text2} <Arrow /> {props.text3} </span>
                    </div>
                ) : (
                    <></>
                )}
            </nav>
        </>
    )
}
export default NavHeader;
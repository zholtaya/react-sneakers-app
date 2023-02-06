import React from "react";
import { NavLink } from "react-router-dom";

const SlideItem = () => {
    return (
        <div
            className="slide"
            style={{
                backgroundColor: "#F4EFE9",
            }}
        >
            <div className="slide__left">
                <h2>Stan Smith, Forever!</h2>
                <NavLink className="button xl" to="/">
                    Купить
                </NavLink>
            </div>
            <div className="slide__right">
                <img src={banner} alt="Stan Smith" />
            </div>
        </div>
    );
};

export default SlideItem;

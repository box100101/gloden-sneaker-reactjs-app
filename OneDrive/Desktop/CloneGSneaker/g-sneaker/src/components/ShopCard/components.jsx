import { useState } from "react";
import "./styles.scss";

export const ButtonAddToCart = ({ item, dispatch, isSelected }) => {
    const [checked, setChecked] = useState(isSelected);
    const handleOnClick = () => {
        setChecked(true);
        dispatch({ type: "ADD_TO_CART", data: item });
    };
    return (
        <>
            <div
                onClick={!checked ? handleOnClick : () => {}}
                className={`btn-add-to-cart__wrapper ${
                    checked ? "checked" : "not-checked"
                }`}
            >
                {checked ? (
                    <span className="checked-icon"></span>
                ) : (
                    <p className="text">ADD TO CART</p>
                )}
            </div>
        </>
    );
};

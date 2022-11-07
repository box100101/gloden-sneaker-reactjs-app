import { memo } from "react";
import { ButtonAddToCart } from "./components";
import "./styles.scss";

const ShopCard = ({ item, dispatch, isSelected }) => {

    return (
        <>
            <div className="shop-card__wrapper">
                <div className="shop-card__img" style={{ backgroundColor: item.color }}>
                    <img src={item.image} alt="" />
                </div>
                <h3 className="shop-card__name">{item.name}</h3>
                <p className="shop-card__description">{item.description}</p>
                <div className="shop-card__footer">
                    <h4 className="price">${item.price.toFixed(2)}</h4>
                    <ButtonAddToCart
                        item={item}
                        dispatch={dispatch}
                        isSelected={isSelected}
                    />
                </div>
            </div>
        </>
    );
};

export default memo(ShopCard);

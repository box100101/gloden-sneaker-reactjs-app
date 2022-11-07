import "./styles.scss";
import trashImg from "../../assets/trash.png";
import { memo, useState } from "react";

const SelectedCard = ({ item, dispatch }) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
        dispatch({
            type: "INCREMENT_ITEM",
            data: { id: item.id, price: item.price },
        });
    };
    const handleDecrement = () => {
        if (count - 1 === 0) {
            handleRemove();
        } else {
            setCount(count - 1);
            dispatch({
                type: "DECREMENT_ITEM",
                data: { id: item.id, price: item.price },
            });
        }
    };
    const handleRemove = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            data: { id: item.id, count: count, price: item.price },
        });
    };

    return (
        <>
            <div className="selected-card__wrapper">
                <div className="selected-card__left">
                    <div className="img" style={{ backgroundColor: item.color }}>
                        <img src={item.image} alt="" />
                    </div>
                </div>
                <div className="selected-card__right">
                    <p className="name">{item.name}</p>
                    <h4 className="price">${item.price}</h4>
                    <div className="actions">
                        <div className="actions__count">
                            <div onClick={handleDecrement} className="button">
                                -
                            </div>
                            <p className="count-number">{count}</p>
                            <div onClick={handleIncrement} className="button">
                                +
                            </div>
                        </div>
                        <div onClick={handleRemove} className="actions__remove">
                            <img src={trashImg} alt="" className="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(SelectedCard);

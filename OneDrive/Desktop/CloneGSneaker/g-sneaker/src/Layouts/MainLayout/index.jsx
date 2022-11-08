import CardLayout from "../CardLayout";
import "./styles.scss";
import "./responsive.scss";
import data from "../../data/shoes.json";
import { useEffect, useReducer } from "react";
import { renderCart, renderProducts } from "./functions";

// INITIALSTATE
const initialListItems = {
    listItemCarts: JSON.parse(localStorage.getItem("listItemCarts")) || [],
    totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
};
const reducer = (state, action) => {
    let newState;

    switch (action.type) {
        case "ADD_TO_CART":
            let tempPrice = state.totalPrice + action.data.price;
            newState = {
                ...state,
                totalPrice: tempPrice,
                listItemCarts: [...state.listItemCarts, action.data],
            };
            break;
        case "REMOVE_FROM_CART":
            let tempList = [...state.listItemCarts];
            tempList = tempList.filter((item) => item.id !== action.data.id);
            let tempPriceRemove =
                state.totalPrice - action.data.price * action.data.count;

            console.log("tempPriceRemove", tempPriceRemove);
            newState = {
                ...state,
                totalPrice: tempPriceRemove,
                listItemCarts: tempList,
            };
            break;
        case "INCREMENT_ITEM":
            let tempPriceIncrement = state.totalPrice + action.data.price;
            newState = {
                ...state,
                totalPrice: tempPriceIncrement,
            };
            break;
        case "DECREMENT_ITEM":
            let tempPriceDecrement = state.totalPrice - action.data.price;
            newState = {
                ...state,
                totalPrice: tempPriceDecrement,
            };
            break;
        default:
            throw new Error("Invalid action");
    }

    console.log("state", newState.listItemCarts);
    localStorage.setItem("listItemCarts", JSON.stringify(newState.listItemCarts));
    localStorage.setItem("totalPrice", newState.totalPrice);
    return newState;
};

const MainLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialListItems);
    const { listItemCarts, totalPrice } = state;

    useEffect(() => {
        console.log("renderCart");
    }, [listItemCarts]);

    // console.log("localStorage", localStorage.getItem("listItemCarts"));
    return (
        <>
            <div className="main-layout__wrapper">
                <CardLayout title="Our Products">
                    {renderProducts(data, listItemCarts, dispatch)}
                </CardLayout>
                <CardLayout title="Your cart" totalPrice={totalPrice}>
                    {renderCart(listItemCarts, dispatch)}
                </CardLayout>
                <div className="main-layout__ripple"></div>
            </div>
        </>
    );
};

export default MainLayout;

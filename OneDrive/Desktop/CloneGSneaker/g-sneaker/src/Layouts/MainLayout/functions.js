import SelectedCard from "../../components/SelectedCard";
import ShopCard from "../../components/ShopCard";

export const renderProducts = (data, listItemCarts, dispatch) => {

    return data.shoes.map((item) => {
        return listItemCarts.includes(item) ? (
            <ShopCard key={item.id} item={item} dispatch={dispatch} isSelected={true} />
        ) : (
            <ShopCard key={item.id} item={item} dispatch={dispatch} isSelected={false} />
        );
    });
};

export const renderCart = (list, dispatch) => {
    return list.map((item) => (
        <SelectedCard key={item.id} item={item} dispatch={dispatch} />
    ));
};

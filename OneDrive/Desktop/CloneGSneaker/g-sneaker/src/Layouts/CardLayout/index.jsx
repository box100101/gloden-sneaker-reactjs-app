import "./styles.scss";
import nike from "../../assets/nike.png";

const CardLayout = ({ title, children, totalPrice }) => {
    return (
        <>
            <div className="card__wrapper">
                <div className="card__brand">
                    <img src={nike} alt="" className="img" />
                </div>
                <div className="card__title">
                    {title}
                    {totalPrice >= 0 && (
                        <span className="total-price">${totalPrice.toFixed(2)}</span>
                    )}
                </div>
                <div className="card__body">
                    {children.length === 0 ? (
                        <p className="empty-cart">Your cart is empty.</p>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </>
    );
};

export default CardLayout;

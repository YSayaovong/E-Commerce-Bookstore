import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../features/cartSlice";

export default function Cart({ open, onClose }) {
  const { items, subtotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <aside className={`cart ${open ? "open" : ""}`}>
        <div className="cart__header">
          <h3>Your Cart</h3>
          <button className="btn__icon" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        <div className="cart__body">
          {items.length === 0 && (
            <p className="muted small">Your cart is empty.</p>
          )}

          {items.map((item) => (
            <div key={item.id} className="cart__item">
              <div>
                <strong>{item.title}</strong>
                <br />
                ${item.price.toFixed(2)} × {item.qty}
              </div>
              <button
                className="btn__icon btn__remove"
                onClick={() => dispatch(removeItem(item.id))}
              >
                ✖
              </button>
            </div>
          ))}
        </div>

        <div className="cart__footer">
          <div className="cart__row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div className="cart__row small">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <button className="btn btn--primary btn--full">Checkout</button>
          <button
            className="btn btn--ghost btn--full"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </aside>

      <div
        className={`overlay ${open ? "active" : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
}

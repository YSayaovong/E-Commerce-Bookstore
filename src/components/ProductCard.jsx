import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import Reveal from "./Reveal";

export default function ProductCard({ book }) {
  const dispatch = useDispatch();

  return (
    <Reveal>
      <div className="card">
        <img src={book.img} alt={book.title} className="card__img" />
        <div className="card__body">
          <h3 className="card__title">{book.title}</h3>
          <p className="card__price">${book.price.toFixed(2)}</p>
          <p className="card__rating">⭐ {book.rating}</p>
          <button
            className="btn btn--primary btn--small"
            onClick={() => dispatch(addItem(book))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Reveal>
  );
}

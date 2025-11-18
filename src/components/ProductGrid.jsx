import { useMemo } from "react";
import productsData from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ category, sort }) {
  const products = useMemo(() => {
    let items = [...productsData];

    if (category !== "all") {
      items = items.filter((p) => p.category === category);
    }

    if (sort === "price-asc") items.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items.sort((a, b) => b.price - a.price);
    if (sort === "rating-desc") items.sort((a, b) => b.rating - a.rating);

    return items;
  }, [category, sort]);

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} book={p} />
      ))}
    </div>
  );
}

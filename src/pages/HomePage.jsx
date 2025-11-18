// src/pages/HomePage.jsx
import React, { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

export default function HomePage() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  const newArrivals = products.slice(-3);

  return (
    <>
      {/* Hero banner */}
      <Hero />

      {/* Categories + main product grid */}
      <section id="featured" className="section section--tint">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              Featured <span className="purple">Books</span>
            </h2>

            <div className="sort">
              <label htmlFor="sort">Sort:</label>
              <select
                id="sort"
                className="select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
              </select>
            </div>
          </div>

          <Categories selected={category} onSelect={setCategory} />

          <ProductGrid category={category} sort={sort} />
        </div>
      </section>

      {/* New Arrivals strip */}
      <section id="new" className="section">
        <div className="container">
          <h2 className="section__title">
            New <span className="purple">Arrivals</span>
          </h2>

          <div className="grid grid--tight">
            {newArrivals.map((b) => (
              <ProductCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

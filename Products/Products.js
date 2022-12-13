import React, { useState } from "react";
import products  from "../../Data";
import Menu from "./Menu";
import Categories from "./Categories";
import './Product.css'

const allCategories = ['All Products', ...new Set(products.map((item) => item.category))];

const Products = () => {
  const [menuItems, setMenuItems] = useState(products);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All Products") {
      setMenuItems(products);
      return;
    }
    const newItems = products.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  
  return (
    <main className="products">
      <section >
        <div className="products-container" >
          <div className="products-nav">
            <h1>Popular Products</h1>
              <Categories categories={categories} filterItems={filterItems} />
          </div>
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
};

export default Products;

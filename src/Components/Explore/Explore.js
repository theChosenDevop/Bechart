import React from "react";
import { Blogs } from "../../Data";
import "./Explore.css";

const Explore = () => {
  return (
    <div>
      <div className="explore">
        <h1>Explore Our Blog</h1>
        <a href="#"><p>View All</p></a>
      
      </div>
     <section className="blog">
     {Blogs.map((blog) => {
        const { id, img, user, date, title, category } = blog;
        return (
          <div
          key={id}>
            <img src={img} alt={title} />
            <p>
              {date} /{user} /{category}
            </p>
          </div>
        );
      })}
     </section>
    </div>
  );
};

export default Explore;

import React from "react";
import { main } from "../../Data";
import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
      {main.map((item, id) => {
        return (
          <article
            key={item.id}
            className="intro-article"
            style={{
              width:
                item.id === 2 || item.id === 4 || item.id === 5
                  ? "590px"
                  : "285px",
              height: item.id === 4 || item.id === 5 ? "200px" : "400px",
            }}
          >
            <div className="intro-container">
              <img src={item.img} alt={item.title} />
              <div className="intro-content">
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Intro;

import React from "react";
import Hero1 from "../../images/hero-product-1.jpg";
import Hero2 from "../../images/hero-product-2.jpg";
import Hero3 from "../../images/hero-product-3.jpg";
import Hero4 from "../../images/hero-product-4.jpg";
import Hero5 from "../../images/hero-product-5.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <article className="intro-container">
      <div className="intro-section">
      <section className="intro-article">
        <img src={Hero1} alt="Art Deco Home" />
        <div className="intro-content">
          <h1>Art Deco Home</h1>
          <p>Decoration</p>
        </div>
      </section>
      <section className="intro-article">
        <img src={Hero2} alt="Helen Chair"  className="large"/>
        <div className="intro-content">
          <h1>Helen Chair</h1>
          <p>Decoration</p>
        </div>
      </section>
      <section className="intro-article">
        <img src={Hero3} alt="Vase Of Flowers" />
        <div className="intro-content">
          <h1>Vase Of Flowers</h1>
          <p>Decoration</p>
        </div>
      </section>
      <section className="intro-article">
        <img src={Hero4} alt="Wood Eggs" className="large2" />
        <div className="intro-content">
          <h1>Wood Eggs</h1>
          <p>Decoration</p>
        </div>
      </section>
      <section className="intro-article">
        <img src={Hero5} alt="Able Wood Pine" className=" large3" />
        <div className="intro-content">
          <h1>Able Wood Pine</h1>
          <p>Furniture</p>
        </div>
      </section>
      </div>
    </article>
  );
};

export default Intro;

// import React from "react";
// import { main } from "../../Data";
// import "./intro.css";

// const Intro = () => {
//   return (
//     <section className="intro">
//       {main.map((item, id) => {
//         return (
//           <article
//             key={item.id}
//             className="intro-article"
//             style={{
//               width:
//                 item.id === 2 || item.id === 4 || item.id === 5
//                   ? "590px"
//                   : "285px",
//               height: item.id === 4 || item.id === 5 ? "200px" : "400px",
//             }}
//           >
//             <div className="intro-container">
//               <img src={item.img} alt={item.title} />
//               <div className="intro-content">
//                 <h1>{item.title}</h1>
//                 <p>{item.subtitle}</p>
//               </div>
//             </div>
//           </article>
//         );
//       })}
//     </section>
//   );
// };

// export default Intro;

// .intro {
//   margin: 100px auto 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 1200px;
//   height: 100%;
//   flex-wrap: wrap;
//   gap: 1rem;
// }
// .intro-article {
//   position: relative;
// }
// .intro-article > .intro-container img {
//   min-height: 100%;
//   min-width: 40%;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;

//   object-fit: cover;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   z-index: -1;
// }
// .intro-content {
//   z-index: 100;
//   position: absolute;
//   left: 20px;
// }

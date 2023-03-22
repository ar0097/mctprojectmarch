import React from "react";
import Navbar from "./Navbar";
import "../styles.css";

const Home = () => {
  return (
    <>
      <div className="background">
        <Navbar />
        <div className="container">
          <div>
            <h1>Welcome to React</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus veniam praesentium ipsum sint asperiores mollitia a et
              explicabo quos. Deleniti id ipsum aliquam assumenda quidem veniam,
              quos amet dicta natus similique, impedit magnam atque quod vel
              corrupti tempore pariatur eveniet fugit alias ad esse rerum culpa
              accusantium nemo. Accusantium tempora dicta vel temporibus laborum
              fugit blanditiis cupiditate eaque maxime assumenda, magni, numquam
              voluptate asperiores debitis modi, sunt velit recusandae expedita
              porro. Sed deleniti blanditiis possimus consequatur vero iure
              dolorem voluptate temporibus laboriosam aperiam fuga dolores est
              autem sapiente, ipsum dicta dolorum et ea! Esse sit facere magni
              et? Magnam, maiores.
            </p>
            <div>
              <button type="button" className="explore">
                Explore More!!!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

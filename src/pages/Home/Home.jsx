import React from "react";

import css from "./Home.module.css";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <main className={css.home}>
      <div className="container">
        <Hero />
      </div>
    </main>
  );
};

export default Home;

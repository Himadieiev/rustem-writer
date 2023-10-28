import React from "react";
import { useSpring, animated } from "@react-spring/web";

import css from "./Home.module.css";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-4rem)" },
    to: { opacity: 1, transform: "translateY(0rem)" },
    config: { duration: 1000 },
  });

  return (
    <main className={css.home}>
      <div className="container">
        <Hero bg="bg-home" />
        <animated.div style={props} className={css.greet}>
          Вітаю Вас, мої друзі!
        </animated.div>
      </div>
    </main>
  );
};

export default Home;

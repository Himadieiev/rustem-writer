import React from "react";
import { useSpring, animated } from "@react-spring/web";

import css from "./Home.module.css";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const initialBg =
    "linear-gradient(to bottom, rgba(226, 203, 119, 0.781), rgba(247, 247, 244, 0.5)";
  const finalBg =
    "linear-gradient(to bottom, rgba(247, 247, 244, 0.5), rgba(226, 203, 119, 0.781)";

  const greet = useSpring({
    from: { opacity: 0, transform: "translateY(-4rem)" },
    to: { opacity: 1, transform: "translateY(0rem)" },
    config: { duration: 1500 },
  });

  const bg = useSpring({
    from: { backgroundImage: initialBg },
    to: { backgroundImage: finalBg },
    config: { duration: 1000 },
  });

  return (
    <animated.main
      style={{
        backgroundImage: bg.backgroundImage,
      }}
      className={css.home}
    >
      <div className="container">
        <Hero bg="bg-home" />
        <animated.div style={greet} className={css.greet}>
          Вітаю Вас, мої друзі!
        </animated.div>
      </div>
    </animated.main>
  );
};

export default Home;

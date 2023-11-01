import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import css from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import { home1, home2, home3 } from "./../../assets/images";

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

  const elementRefs = [useRef(), useRef(), useRef()];
  const [elVisibility, setElVisibility] = useState([false, false, false]);

  useEffect(() => {
    const observers = elementRefs.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];

        setElVisibility((prevVisibility) => {
          const updatedVisibility = [...prevVisibility];

          updatedVisibility[index] = entry.isIntersecting;

          return updatedVisibility;
        });
      });

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
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
          Вітаю Вас, шановні читачі та гості мого літературного світу!
        </animated.div>
        <ul className={css.blocks}>
          <li
            ref={elementRefs[0]}
            className={`${css.block} 
              ${elVisibility[0] ? css.visible : css.hidden}`}
          >
            <p className={css.text}>
              Я хочу вас занурити у захоплюючий світ уяви, де межі реальності
              розмиваються, і де чудові історії стають живими. Ласкаво просимо
              до мого літературного світу, де магія, пригоди і незвичайні істоти
              розцвітають на сторінках кожного твору.
            </p>
            <div className={css.img}>
              <img src={home1} alt="Book" />
            </div>
          </li>
          <li
            ref={elementRefs[1]}
            className={`${css.block} ${css.blockRev}
              ${elVisibility[1] ? css.visible : css.hiddenReversed}`}
          >
            <div className={css.img}>
              <img src={home2} alt="Book" />
            </div>
            <p className={css.text}>
              Загубіться у світі справжнього фентезі, де сильні герої зіткнуться
              з темними силами, де дракони летять над горами, а ельфи ведуть
              свої битви в густому лісі. Мої твори наповнені інтригами,
              загадками та незабутніми персонажами, які вас приваблять і не
              відпустять.
            </p>
          </li>
          <li
            ref={elementRefs[2]}
            className={`${css.block}
               ${elVisibility[2] ? css.visible : css.hidden}`}
          >
            <p className={css.text}>
              Ви знайдете глибокі філософські роздуми, що доторкнуться до
              найглибших рецепторів вашої душі. Що б вас цікавило - сюжети з
              фантастичними світами, історії про подвиги героїв чи роздуми про
              сутність добра і зла, тут ви знайдете щось, що спокусить вашу уяву
              та залишить вас з бажанням дізнатися більше.
            </p>
            <div className={css.img}>
              <img src={home3} alt="Book" />
            </div>
          </li>
        </ul>
      </div>
    </animated.main>
  );
};

export default Home;

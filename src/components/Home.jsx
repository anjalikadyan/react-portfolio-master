import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/Adobe Express - file.png";
import data from "../assets/data.json";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, data.projects.length, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Anjali Kadyan
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Full Stack Developer", "UI/UX Designer", "Software Engineer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                >
                  {data.projects.length}
                </motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            {ratio < 2 && (
              <article data-special>
                <p>Contact</p>
                <a href="mailto:anjalikadyan607@gmail.com">anjalikadyan607@gmail.com</a>
              </article>
            )}
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Anjali" />
      </section>
    </div>
  );
};

export default Home;

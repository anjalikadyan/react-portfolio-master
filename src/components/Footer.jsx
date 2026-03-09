import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"../assets/1.png"}
          alt="Founder"
        />

        <h2>Anjali kadyan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
        <p>anjalikadyan607@gmail.com</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/6packprogrammer" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/anjali_kadyan000" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/anjalikadyan" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Anjali Kadyan</h2>
        <p>anjalikadyan607@gmail.com</p>
      </div>

      <aside>
        <h2>Connect with me</h2>

        <article>
          <a href="https://www.linkedin.com/in/anjali-kadyan-070274248/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/anjalikadyan" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="mailto:anjalikadyan607@gmail.com">
            <AiOutlineMail />
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

import React from "react";
import "../Styles/Contact.css";
import insta from "../Icons/insta.png";
import Fb from "../Icons/fb.png";
import thread from "../Icons/thread.png";
import tweet from "../Icons/twitter.png";
const Contact = () => {
  return (
    <div className="contact" id="/contact">
      <h1>Contact</h1>

      <form action="">
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Leave a message"
        ></textarea>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
      <div className="socials">
        <a href="">
          <img src={Fb} alt="" width="40px" height="40px" />
        </a>
        <a href="">
          <img src={insta} alt="" width="40px" height="40px" />
        </a>
        <a href="">
          <img src={tweet} alt="" width="40px" height="40px" />
        </a>
        <a href="">
          <img src={thread} alt="" width="40px" height="40px" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

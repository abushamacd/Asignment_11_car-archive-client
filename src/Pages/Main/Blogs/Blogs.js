import React from "react";
import { Container } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  // This is question and answer page
  return (
    <Container>
      <h1 className="text-center my-5">Question &#38; Answer</h1>
      <div className="qa">
        <h2>
          <span>Q1:</span> Difference between javascript and node js?
        </h2>
        <p>
          <span>Ans:</span> <br /> <span className="primary">Javascript:</span>
          <br />
          1. Javascript is a scripting language that used in website.
          <br />
          2. Javascript runs only in browsers.
          <br />
          3. Its main purpose is to handle client-side requests.
          <br />
          4. Frontend developers use Javascript.
          <br />
          5. Some examples of javascript frameworks are React, Vue, etc.
          <br />
          <span className="primary">Node JS:</span>
          <br />
          1. NodeJS is an environment for running Javascript code.
          <br />
          2. Javascript can be run outside the browser by NodeJS.
          <br />
          3. Server-side scripting is the most common usage.
          <br />
          4. The server-side development of websites is done with Node.js.
          <br />
          5. Modules like Lodash, Express, etc., are included in Nodejs.
          <br />
        </p>
      </div>
    </Container>
  );
};

export default Blogs;
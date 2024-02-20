import React from "react";
import './skills.css';
import html from '../images/html.png';
import css from '../images/css.png';
import bootstrap from '../images/bootstrap.jpg';
import nodejs from '../images/nodejs.png';
import expressjs from '../images/express-js.png';
import reactjs from '../images/react.png';
import mongodb from '../images/mongodb.png';
import github from '../images/github.jpg';
import python from '../images/python.png';

const Skills = () => {
  return (
    <>
    <h1>Skills</h1>
    <figure className="snip1470">
      <img
        src={html}
        alt="sample2"
      />
      <figcaption>
        <h2>HTML</h2>
        <p>
          Hyper Text Markup Language
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470 ">
      <img
        src={css}
        alt="sample3"
      />
      <figcaption>
        <h2>CSS</h2>
        <p>
          Cascading Styling Sheets
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470">
      <img
        src={bootstrap}
        alt="sample4"
      />
      <figcaption>
        <h2>Bootstrap</h2>
        <p>
        Bootstrap
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470">
      <img
        src={nodejs}
        alt="sample4"
      />
      <figcaption>
        <h2>Nodejs</h2>
        <p>
          Nodejs
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470">
      <img
        src={expressjs}
        alt="sample4"
      />
      <figcaption>
        <h2>Expressjs</h2>
        <p>
          Express js
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470">
      <img
        src={reactjs}
        alt="sample4"
      />
      <figcaption>
        <h2>React js</h2>
        <p>
          React js
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470">
      <img
        src={mongodb}
        alt="sample4"
      />
      <figcaption>
        <h2>Mongo db</h2>
        <p>
          Mongodb
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470">
      <img
        src={python}
        alt="sample4"
      />
      <figcaption>
        <h2>Python</h2>
        <p>
          Python
        </p>
      </figcaption>
      <a href="#" />
    </figure>
    <figure className="snip1470">
      <img
        src={github}
        alt="sample4"
      />
      <figcaption>
        <h2>Github</h2>
        <p>
         Github
        </p>
      </figcaption>
      <a href="#" />
    </figure>
  </>
  
  );
}

export default Skills;

// import './Aside.css';
import { Fragment } from "react";
import { Link } from "react-router-dom";
function Aside() {
  return (
    <Fragment>
      <h2>Blog Posts</h2>
      <ul>
        <li>
          {" "}
          <Link to="/blog/1">Blog Post 1</Link>
        </li>
        <li>
          {" "}
          <Link to="/blog/2">Blog Post 2</Link>
        </li>
        <li>
          {" "}
          <Link to="/blog/3">Blog Post 3</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Aside;

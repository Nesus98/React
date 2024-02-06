// import './Blog.css';
import { Fragment } from "react";
import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return (
    <Fragment>
      <h2>Blog Content</h2>
      <p>Lorem ipsum dolor sir amet.</p>
      <div>
        {id && (
          <>
            <h3>Publication{id}</h3>
            <p>
              Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
              dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir
              amet
            </p>
          </>
        )}
      </div>
    </Fragment>
  );
}

export default Blog;

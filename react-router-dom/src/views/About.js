import { Fragment } from "react";
import { useParams } from "react-router-dom";

function About() {
    const {id} =useParams()
    console.log(id);

  return (
    <Fragment>
      <h2>About</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, saepe.
      </p>
      {id && <p>Id: {id}</p>}
    </Fragment>
  );
}

export default About;

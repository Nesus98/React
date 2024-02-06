import { Fragment } from "react";
import { useOutletContext } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Survey() {
    const outletContext= useOutletContext()

  return (
    <Fragment>
      <h2>Survey</h2>
      <p>{outletContext}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, saepe.
      </p>
    </Fragment>
  );
}

export default Survey;

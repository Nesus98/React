// import './Contact.css';

import { Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Contact() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      //   setLoggedIn(true);
      navigate("/");
    }, 3000);
  }, []);

  return (
    <Fragment>
      {/* {loggedIn && <Navigate to="/" />} */}
      <h2>Contact</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, saepe.
      </p>
    </Fragment>
  );
}

export default Contact;

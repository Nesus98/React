import "./CardWrapper.css";
import App from "./../App";

function CardWrapper(props) {
  return <div className="outer-card">{props.children}</div>;
}

export default CardWrapper;

import "./Expenses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChampagneGlasses,
  faSquare,
  faBurger,
  faGlassWater,
  faArrowDownLong,
  faArrowUpLong,
  faBriefcase,
  faCommentDollar,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

function Expenses() {
  return (
    <div className="wrapper">
      {/* item */}
      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layer fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-bill"/>
            <FontAwesomeIcon
              icon={faChampagneGlasses}
              inverse
              transform="shrink-8"
              className="bill"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Food And Drinks</h2>
          <small className="expense-date">24/08/22</small>
        </div>
        <div className="item-cost flex-20 expense fa-xxx flex-center">
          <span>&#8722; $20</span>
          <FontAwesomeIcon icon={faArrowDownLong} className="m-left-20" />
        </div>
      </div>
      {/* item */}
      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layer fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-incoming" />
            <FontAwesomeIcon
              icon={faBriefcase}
              inverse
              transform="shrink-8"
              className="incoming"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Freelancing Work</h2>
          <small className="expense-date">31/08/21</small>
        </div>
        <div className="item-cost flex-20 income fa-xxx flex-center">
          <span>&#43; $260</span>
          <FontAwesomeIcon icon={faArrowUpLong} className="m-left-20" />
        </div>
      </div>
      {/* item */}
      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layer fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-bizum" />
            <FontAwesomeIcon
              icon={faCommentDollar}
              inverse
              transform="shrink-8"
              className="bizum"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Send Bizum to friend</h2>
          <small className="expense-date">01/09/22</small>
        </div>
        <div className="item-cost flex-20 expense fa-xxx flex-center">
          <span>&#8722; $50</span>
          <FontAwesomeIcon icon={faArrowDownLong} className="m-left-20" />
        </div>
      </div>
      {/* item */}
      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layer fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-incoming" />
            <FontAwesomeIcon
              icon={faSackDollar}
              inverse
              transform="shrink-8"
              className="incoming"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Payroll</h2>
          <small className="expense-date">01/09/21</small>
        </div>
        <div className="item-cost flex-20 income fa-xxx flex-center">
          <span>&#43; $2500</span>
          <FontAwesomeIcon icon={faArrowUpLong} className="m-left-20" />
        </div>
      </div>
      {/* item */}
    </div>
  );
}

export default Expenses;

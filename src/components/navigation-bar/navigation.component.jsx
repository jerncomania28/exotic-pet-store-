import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

//Components
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Button from "../buttons/button.component";

//styles
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-bar">
        <div className="logo">
          <Link to="/">
            <Logo className="logo-item" />
          </Link>
        </div>
        <div className="nav-links">
          <div className="nav-links-container">
            <Link to="/" className="nav-links-item">
              <span>Home</span>
            </Link>
            <Link to="/shop" className="nav-links-item">
              <span>Shop</span>
            </Link>
            <Link to="/contact" className="nav-links-item">
              <span>Contact Us</span>
            </Link>
          </div>

          <Link to="/signup">
            <Button buttonType="empty" width="131px">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

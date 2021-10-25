import "./Header.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button1 from "./Buttons/Button1/Button1";
import Button2 from "./Buttons/Button2/Button2";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerMine">
          <Logo />
          <Nav />
          <Button1 />
          <Button2 />
          <div>
            <p className="singin">sing in</p>
          </div>
          <div className="button3">
            <button type="button" className="prim btn btn-primary">
              Start a Free Trial
            </button>
          </div>
          <div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="switch custom-control-input"
                id="customSwitches"
              />
              <label
                className="custom-control-label"
                for="customSwitches"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

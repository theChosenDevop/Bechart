import { User, Bag, Heart } from "../../Icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="input-holder">
          <input type="text" placeholder="Search Anything" />
        </div>
        <h3>Bechart</h3>
        <div className="icons">
          <button>
            <User /> <span>0</span>
          </button>
          <button>
            <Bag /> <span>3</span>
          </button>
          <button>
            <Heart /> <span>1</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

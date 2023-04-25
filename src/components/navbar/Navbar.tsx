import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return() => {
        window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "User",
    isSeller: true
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
            <Link to="/" className="link">
                <span className="text">gigCentral</span>
                <span className="dot">.</span>
            </Link>
        </div>
        <div className="links">
            <span>Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign In</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button>Join</button>}
            {currentUser && (
                <div className="user" onClick={() => setToggleProfile(!toggleProfile)}>
                    <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    {/* <span>{currentUser?.username}</span> */}
                    {toggleProfile && <div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                <Link className="link" to="/gigs">Gigs</Link>
                                <Link className="link" to="/addGig">Add New Gigs</Link>
                                </>
                            )
                        }
                        <Link className="link" to="/orders">Orders</Link>
                        <Link className="link" to="/messages">Messages</Link>
                        <Link className="link" to="/">Logout</Link>
                    </div>}
                </div>
            )}
        </div>
      </div>
      { (active || pathname !== "/") && (
      <>
       <hr />
        <div className="menu">
        <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
        </div>
      </>
      )}
    </div>
  );
};

export default Navbar;

import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Gloria Alori</a>
            </h1>
    
          </div>
        <NavBar/>
         
        </div>
      </header>
    </>
  );
}

export default Header;

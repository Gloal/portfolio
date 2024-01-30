import NavBar from "./NavBar";

function Header() {
  return (
    <>
 <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
 
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Alex Smith</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="gitHub">
                <i className="bx bxl-gitHub"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        <NavBar/>
         
        </div>
      </header>
    </>
  );
}

export default Header;

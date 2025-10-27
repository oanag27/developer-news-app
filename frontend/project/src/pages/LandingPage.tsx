import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/login");
  };
  const handleClickBrowsing = () => {
    navigate("/");
  };
  return (
    <div className="bg-light border-0">
      <header className="bg-white border-bottom w-100">
        <nav className="navbar navbar-light py-3">
          <div className="container-fluid px-5">
            <Link to="/" className="navbar-brand fw-semibold">
              Devly
            </Link>
            <div className="d-flex align-items-center gap-4">
              <button className="btn btn-dark px-4" onClick={handleOnClick}>
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>
      <section className="py-5 mt-5 h-50">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold mb-4">
                Curate the Best Tech
                <br />
                Articles in One Place
              </h1>
              <p className="lead text-secondary mb-4 mx-auto">
                Stay updated with the latest development news, save your
                favorite articles and build your personal reading list.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button
                  className="btn btn-dark px-4 py-2"
                  onClick={handleClickBrowsing}
                >
                  Start Browsing
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
